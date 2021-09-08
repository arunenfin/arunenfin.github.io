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
  var hostUpstreamConnection;

  var audVideoLayout;

  var reRegisterBackoff = 200;
  var maxRegisterBackoff = 60000;
  var unregistering = false;

  var localMedia;
  var hostLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("host-container"));
  var audLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("aud-container"));
  var coHostLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("cohost-container"));

  hostLayoutManager.setMode(fm.liveswitch.LayoutMode.Inline);
  audLayoutManager.setMode(fm.liveswitch.LayoutMode.Inline);
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
    hostUpstreamConnection = openSfuUpstreamConnection(localMedia, hostChannel);

    // Open a new SFU downstream connection for hosts.
    hostChannel.addOnRemoteUpstreamConnectionOpen(function (remoteConnectionInfo) { return openSfuDownstreamConnection(remoteConnectionInfo, hostChannel, hostLayoutManager, hostDownstreamConnections) });
    
    // Set the local video layout when a new MCU video layout is received from server.
    audienceChannel.addOnMcuVideoLayout(function (videoLayout) {
      audVideoLayout = videoLayout;
      audLayoutManager.layout();
    });

    // Open a new MCU connection.
    mcuConnection = openMcuConnection(audienceChannel, audLayoutManager);

    // Open a new SFU downstream connection for co-hosts.
    cohostChannel.addOnRemoteUpstreamConnectionOpen(function (remoteConnectionInfo) { return openSfuDownstreamConnection(remoteConnectionInfo, cohostChannel, coHostLayoutManager, cohostDownstreamConnections) });
  }

  function startLocalMedia(audioInput, videoInput) {
    var promise = new fm.liveswitch.Promise();

    if (localMedia == null) {
      // Create local media with audio and video enabled.
      var audioEnabled = true;
      var videoEnabled = true;
      localMedia = new fm.liveswitch.LocalMedia(audioEnabled, videoEnabled);
      
      setAudioInput(audioInput);
      setVideoInput(videoInput);

      // Set local media in the layout.
      hostLayoutManager.setLocalMedia(localMedia);
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

  function openMcuConnection(channel, layoutManager) {
    // Create a remote media and add it to the layout.
    var remoteMedia = new fm.liveswitch.RemoteMedia(true, true);
    layoutManager.addRemoteMedia(remoteMedia);

    // Create a audio stream and a video stream using local media and remote media.
    // var audioStream = new fm.liveswitch.AudioStream(null, remoteMedia);
    var videoStream = new fm.liveswitch.VideoStream(null, remoteMedia);

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
    // layoutManager.addOnLayout(function (layout) {
    //   if (mcuConnection != null) {
    //     fm.liveswitch.LayoutUtility.floatLocalPreview(layout, videoLayout, mcuConnection.getId(), remoteMedia.getId(), localMedia.getViewSink());
    //   }
    // });

    connection.open();

    return connection;
  }

  function openSfuUpstreamConnection(localMedia, channel) {
    // Create audio and video streams from local media.
    var audioStream = new fm.liveswitch.AudioStream(localMedia);
    var videoStream = new fm.liveswitch.VideoStream(localMedia);

    // Create a SFU upstream connection with local audio and video.
    var connection = channel.createSfuUpstreamConnection(audioStream, videoStream);

    connection.addOnStateChange(function (conn) {
      fm.liveswitch.Log.debug('Upstream connection is ' + new fm.liveswitch.ConnectionStateWrapper(conn.getState()).toString() + '.');
    });

    connection.open();
    return connection;
  }

  function openSfuDownstreamConnection(remoteConnectionInfo, channel, layoutManager, downstreamConnections) {
    // Create remote media.
    var remoteMedia = new fm.liveswitch.RemoteMedia();
    var audioStream = new fm.liveswitch.AudioStream(remoteMedia);
    var videoStream = new fm.liveswitch.VideoStream(remoteMedia);

    // Add remote media to the layout.
    layoutManager.addRemoteMedia(remoteMedia);

    // Create a SFU downstream connection with remote audio and video.
    var connection = channel.createSfuDownstreamConnection(remoteConnectionInfo, audioStream, videoStream);

    // Store the downstream connection.
    downstreamConnections[connection.getId()] = connection;

    connection.addOnStateChange(function (conn) {
      fm.liveswitch.Log.debug('Downstream connection is ' + new fm.liveswitch.ConnectionStateWrapper(conn.getState()).toString() + '.');

      // Remove the remote media from the layout and destroy it if the remote is closed.
      if (conn.getRemoteClosed()) {
        delete downstreamConnections[connection.getId()];
        layoutManager.removeRemoteMedia(remoteMedia);
        remoteMedia.destroy();
      }
    });

    connection.open();
    return connection;
  }

  function setAudioInput(input) {
    localMedia.changeAudioSourceInput(input);
  }

  function setVideoInput(input) {
    localMedia.changeVideoSourceInput(input);
  }

  return {
    joinAsync: joinAsync,
    startLocalMedia: startLocalMedia,
    setAudioInput: setAudioInput,
    setVideoInput: setVideoInput,
  }

}