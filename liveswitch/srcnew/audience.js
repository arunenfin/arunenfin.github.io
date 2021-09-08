function Host() {
  fm.liveswitch.Log.registerProvider(new fm.liveswitch.ConsoleLogProvider(fm.liveswitch.LogLevel.Debug));
  var displayMessage = function (msg) {
    console.log(msg)
  };
  var Config = config();
  var applicationId = Config.applicationId;
  var hostChannelId = Config.hostChannelId;
  var audienceChannelId = Config.audienceChannelId;
  var cohostChannelId = Config.cohostChannelId;
  var gatewayUrl = Config.gatewayUrl;
  var sharedSecret = Config.sharedSecret;

  var client;
  var hostChannel;
  var audienceChannel;
  var cohostChannel;
  var cohostUpstreamConnection;

  var audVideoLayout;

  var reRegisterBackoff = 200;
  var maxRegisterBackoff = 60000;
  var unregistering = false;
  var textChannel = null;
  var showCoHostLocalMedia = false;
  var audioLevelStamp = 0;

  var localMedia;
  var cohostLocalMedia;
  var hostLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("host-container"));
  var audLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("aud-container"));
  var coHostLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("cohost-container"));

  hostLayoutManager.setMode(fm.liveswitch.LayoutMode.Inline);
  // audLayoutManager.setMode(fm.liveswitch.LayoutMode.Inline);
  coHostLayoutManager.setMode(fm.liveswitch.LayoutMode.Inline);


  var hostDownstreamConnections = {};
  var cohostDownstreamConnections = {};

  function joinAsync() {
    var promise = new fm.liveswitch.Promise();

    // Create a client.
    client = new fm.liveswitch.Client(gatewayUrl, applicationId);

    // Generate a token (do this on the server to avoid exposing your shared secret).
    var token = fm.liveswitch.Token.generateClientRegisterToken(
      applicationId, 
      client.getUserId(), 
      client.getDeviceId(), 
      client.getId(), 
      null, 
      [
        new fm.liveswitch.ChannelClaim(hostChannelId),
        new fm.liveswitch.ChannelClaim(audienceChannelId),
        new fm.liveswitch.ChannelClaim(cohostChannelId),
      ], 
      sharedSecret
    );

    // Allow re-register.
    unregistering = false;

    client.addOnStateChange(function () {
      // Write registration state to log.
      fm.liveswitch.Log.debug('Client is ' + new fm.liveswitch.ClientStateWrapper(client.getState()) + '.');

      if (client.getState() === fm.liveswitch.ClientState.Unregistered && !unregistering) {
        fm.liveswitch.Log.debug('Registering with backoff = ' + reRegisterBackoff + '.');
        displayMessage("Client unregistered unexpectedly, trying to re-register.");

        // Re-register after a backoff.
        setTimeout(function () {
          // Incrementally increase register backoff to prevent runaway process.
          if (reRegisterBackoff <= maxRegisterBackoff) {
            reRegisterBackoff += reRegisterBackoff;
          }

          // Register client with token.
          client.register(token)
            .then(function (channels) {
              // Reset re-register backoff after successful registration.
              reRegisterBackoff = 200;
              onClientRegistered(channels);
              promise.resolve(null);
            })
            .fail(function (ex) {
              fm.liveswitch.Log.error("Failed to register with Gateway.");
              promise.reject(ex)
            });

        }, reRegisterBackoff);
      }
    });

    // Register client with token.
    client.register(token)
      .then(function (channels) {
        onClientRegistered(channels);
        promise.resolve(null);
      })
      .fail(function (ex) {
        fm.liveswitch.Log.error("Failed to register with Gateway.");
        promise.reject(ex)
      });

    return promise;
  }

  function onClientRegistered(channels) {

    // Store our channel reference.
    hostChannel = channels[0];
    audienceChannel = channels[1];
    cohostChannel = channels[2];


    var msg = 'Client ' + client.getId() + ' has successfully connected to channel ' + hostChannel.getId() + ', Hello World!';
    fm.liveswitch.Log.debug(msg);
    displayMessage(msg);

    // Open a new SFU upstream connection for host.
    // cohostUpstreamConnection = openSfuUpstreamConnection(cohostLocalMedia, cohostChannel);

    // Open a new SFU downstream connection for hosts.
    hostChannel.addOnRemoteUpstreamConnectionOpen(function (remoteConnectionInfo) { return openSfuHostDownstreamConnection(remoteConnectionInfo) });
    
    // Set the local video layout when a new MCU video layout is received from server.
    audienceChannel.addOnMcuVideoLayout(function (videoLayout) {
      audVideoLayout = videoLayout;
      audLayoutManager.layout();
    });

    // Open a new MCU connection.
    mcuConnection = openMcuConnection(audienceChannel, audLayoutManager);

    // Open a new SFU downstream connection for co-hosts.
    cohostChannel.addOnRemoteUpstreamConnectionOpen(function (remoteConnectionInfo) { return openSfuCoHostDownstreamConnection(remoteConnectionInfo, 'data') });
  }


  function startLocalMedias() {
    return startCoHostLocalMedia().then(function() {
      cohostLocalMedia.addOnAudioLevel(function(level) {
        if(level > 0.1) {
          audioLevelStamp = Date.now();

          if(!showCoHostLocalMedia) {
            // stopLocalMedia();
            var mcuConfig = mcuConnection.getConfig();
            mcuConfig.setLocalVideoDisabled(true);
            mcuConnection.update(mcuConfig);
            audLayoutManager.unsetLocalView();
  
            showCoHostLocalMedia = true;
            // coHostLayoutManager.setLocalMedia(cohostLocalMedia);
            coHostLayoutManager.setLocalView(cohostLocalMedia.getView());
            // Open a new SFU upstream connection for host.
            cohostUpstreamConnection = openSfuUpstreamConnection(cohostLocalMedia, cohostChannel);
            // textChannel.sendDataString('switch');
          }
        } else if(audioLevelStamp > 0 && showCoHostLocalMedia && (Date.now() - audioLevelStamp > 60000)) {
          showCoHostLocalMedia = false;

          var mcuConfig = mcuConnection.getConfig();
          mcuConfig.setLocalVideoDisabled(false);
          mcuConnection.update(mcuConfig);
          audLayoutManager.setLocalView(localMedia.getView());

          coHostLayoutManager.unsetLocalView();
          cohostUpstreamConnection.close();

        }
      })
      return startLocalMedia();
    })
  }

  function startCoHostLocalMedia() {
    var promise = new fm.liveswitch.Promise();
    if (cohostLocalMedia == null) {
      // Create local media with audio and video enabled.
      var audioEnabled = true;
      var videoEnabled = true;
      cohostLocalMedia = new fm.liveswitch.LocalMedia(audioEnabled, videoEnabled);

      // Set local media in the layout.
      coHostLayoutManager.setLocalMedia(cohostLocalMedia);
      coHostLayoutManager.unsetLocalView();
    }

    // Start capturing local media.
    cohostLocalMedia.start()
      .then(function () {
        fm.liveswitch.Log.debug("Media capture started.");
        promise.resolve(null);
      })
      .fail(function (ex) {
        fm.liveswitch.Log.error(ex.message);
        promise.reject(ex);
      });

    return promise;
  }

  function startLocalMedia() {
    var promise = new fm.liveswitch.Promise();
    if (localMedia == null) {
      // Create local media with audio and video enabled.
      var audioEnabled = false;
      var videoEnabled = true;
      localMedia = new fm.liveswitch.LocalMedia(audioEnabled, videoEnabled);

      // Set local media in the layout.
      audLayoutManager.setLocalMedia(localMedia);
    }

    // Start capturing local media.
    localMedia.start()
      .then(function () {
        fm.liveswitch.Log.debug("Media capture started.");
        promise.resolve(null);
      })
      .fail(function (ex) {
        fm.liveswitch.Log.error(ex.message);
        promise.reject(ex);
      });

    return promise;
  }

  function stopLocalMedia() {
    var promise = new fm.liveswitch.Promise();

    // Stop capturing local media.
    localMedia.stop()
      .then(function () {
        fm.liveswitch.Log.debug("Media capture stopped.");
        promise.resolve(null);
      })
      .fail(function (ex) {
        fm.liveswitch.Log.error(ex.message);
        promise.reject(ex);
      });

    return promise;
  }

  function openMcuConnection(channel, layoutManager, noLocalMedia) {
    // Create a remote media and add it to the layout.
    var remoteMedia = new fm.liveswitch.RemoteMedia(true, true);
    layoutManager.addRemoteMedia(remoteMedia);

    var lMedia = noLocalMedia ? null : localMedia;

    // Create a audio stream and a video stream using local media and remote media.
    // var audioStream = new fm.liveswitch.AudioStream(lMedia, remoteMedia);
    var videoStream = new fm.liveswitch.VideoStream(lMedia, remoteMedia);

    // Create a MCU connection with audio and video streams.
    var connection = channel.createMcuConnection(videoStream);

    connection.addOnStateChange(function (conn) {
      if (conn.getState() === fm.liveswitch.ConnectionState.Closing || conn.getState() === fm.liveswitch.ConnectionState.Failing) {
        // Remove the remote media from the layout and destroy it when the connection is closing or failing.
        layoutManager.removeRemoteMedia(remoteMedia);
        remoteMedia.destroy();
      } else if (conn.getState() === fm.liveswitch.ConnectionState.Failed) {
        // Reconnect when the MCU connection failed.
        mcuConnection = openMcuConnection(channel, layoutManager);
      }
    });

    // Overlay the local view on top of the received video layout.
    layoutManager.addOnLayout(function (layout) {
      if (mcuConnection != null) {
        fm.liveswitch.LayoutUtility.floatLocalPreview(layout, audVideoLayout, mcuConnection.getId(), remoteMedia.getId(), localMedia.getViewSink());
      }
    });

    connection.open();

    return connection;
  }

  function openSfuUpstreamConnection(localMedia, channel) {
    // Create audio and video streams from local media.
    var audioStream = new fm.liveswitch.AudioStream(localMedia);
    var videoStream = new fm.liveswitch.VideoStream(localMedia);

    // Create data channel and stream.
    var dataChannelText = new fm.liveswitch.DataChannel("text-channel");
    var dataStream = new fm.liveswitch.DataStream(dataChannelText);

    if (textChannel == null) {
      textChannel = dataChannelText;
    }

    // Create a SFU upstream connection with local audio and video.
    var connection = channel.createSfuUpstreamConnection(audioStream, videoStream, dataStream);

    connection.addOnStateChange(function (conn) {
      fm.liveswitch.Log.debug('Upstream connection is ' + new fm.liveswitch.ConnectionStateWrapper(conn.getState()).toString() + '.');
    });

    connection.open();
    return connection;
  }

  function openSfuHostDownstreamConnection(remoteConnectionInfo) {
    // Create remote media.
    var remoteMedia = new fm.liveswitch.RemoteMedia();
    var audioStream = new fm.liveswitch.AudioStream(remoteMedia);
    var videoStream = new fm.liveswitch.VideoStream(remoteMedia);

    // Add remote media to the layout.
    hostLayoutManager.addRemoteMedia(remoteMedia);

    // Create a SFU downstream connection with remote audio and video.
    var connection = hostChannel.createSfuDownstreamConnection(remoteConnectionInfo, audioStream, videoStream);

    // Store the downstream connection.
    hostDownstreamConnections[connection.getId()] = connection;

    connection.addOnStateChange(function (conn) {
      fm.liveswitch.Log.debug('Downstream connection is ' + new fm.liveswitch.ConnectionStateWrapper(conn.getState()).toString() + '.');

      // Remove the remote media from the layout and destroy it if the remote is closed.
      if (conn.getRemoteClosed()) {
        delete hostDownstreamConnections[connection.getId()];
        hostLayoutManager.removeRemoteMedia(remoteMedia);
        remoteMedia.destroy();
      }
    });

    connection.open();
    return connection;
  }


  function onReceiveText(connection, remoteConnectionInfo, dataChannelReceiveArgs) {
    if(dataChannelReceiveArgs.getDataString() === 'switch'){
      console.log('--dataChannelReceiveArgs.getDataString()--',dataChannelReceiveArgs.getDataString())
      console.log('--remoteConnectionInfo--',remoteConnectionInfo)
      console.log('--connection--',connection)
      connection.close()
      openSfuCoHostDownstreamConnection(remoteConnectionInfo, '')
    }
  }

  function openSfuCoHostDownstreamConnection(remoteConnectionInfo, flag) {
    // Create remote media.
    var remoteMedia = new fm.liveswitch.RemoteMedia();
    var audioStream = new fm.liveswitch.AudioStream(remoteMedia);
    var videoStream = new fm.liveswitch.VideoStream(remoteMedia);
    // Create data channel and set onReceive.
    const dataChannelText = new fm.liveswitch.DataChannel("text-channel");

    // Create data stream with the data channel.
    const dataStream = new fm.liveswitch.DataStream(dataChannelText);

    var connection;

    // if(flag === 'data') {

    //   // Create a SFU downstream connection with remote audio and video.
    //   connection = cohostChannel.createSfuDownstreamConnection(remoteConnectionInfo, dataStream);

    //   dataChannelText.setOnReceive(onReceiveText.bind(null, connection, remoteConnectionInfo));

    // } else  {

      // Add remote media to the layout.
      coHostLayoutManager.addRemoteMedia(remoteMedia);

      // Create a SFU downstream connection with remote audio and video.
      connection = cohostChannel.createSfuDownstreamConnection(remoteConnectionInfo, audioStream, videoStream, dataStream);
    // }

    // Store the downstream connection.
    cohostDownstreamConnections[connection.getId()] = connection;

    connection.addOnStateChange(function (conn) {
      fm.liveswitch.Log.debug('Downstream connection is ' + new fm.liveswitch.ConnectionStateWrapper(conn.getState()).toString() + '.');

      // Remove the remote media from the layout and destroy it if the remote is closed.
      if (conn.getRemoteClosed()) {
        delete cohostDownstreamConnections[connection.getId()];
        coHostLayoutManager.removeRemoteMedia(remoteMedia);
        remoteMedia.destroy();
      }
    });

    connection.open();
    return connection;
  }

  return {
    joinAsync: joinAsync,
    startLocalMedia: startLocalMedia,
    startLocalMedias: startLocalMedias,
  }

}