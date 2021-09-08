function MediaSelect(setLocalMediaAudioInput, setLocalMediaVideoInput) {
  var modalMedia;
  var modalLayoutManager = new fm.liveswitch.DomLayoutManager(document.getElementById("video-container"));

  // Switch audio input device.
  function getAudioInputs() {
    return modalMedia.getAudioSourceInputs();
  }

  function setAudioInput(input) {
    modalMedia.changeAudioSourceInput(input);
  }

  // Switch video input device.
  function getVideoInputs() {
    return modalMedia.getVideoSourceInputs();
  }

  function setVideoInput(input) {
    modalMedia.changeVideoSourceInput(input);
  }

  function startModalMedia() {
    var promise = new fm.liveswitch.Promise();

    if (modalMedia == null) {
      // Create local media with audio and video enabled.
      var audioEnabled = true;
      var videoEnabled = true;
      modalMedia = new fm.liveswitch.LocalMedia(audioEnabled, videoEnabled);

      // Set local media in the layout.
      modalLayoutManager.setLocalMedia(modalMedia);
    }

    // Start capturing local media.
    modalMedia.start()
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

  function stopModalMedia() {
    var promise = new fm.liveswitch.Promise();

    // Stop capturing local media.
    modalMedia.stop()
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

  function init(started) {
    startModalMedia().then(function() {
      getAudioInputs().then(function(audioInputs) {
        const selectBox = document.getElementById("audioInputs");
        for (var i=0; i<audioInputs.length; i++) {
            var option = document.createElement("option");
            option.text = audioInputs[i].getName();
            if(getAudioInput()._name === option.text) {
              option.selected = true
            }
            selectBox.add(option);
        }
        selectBox.onchange = function() { 
          setAudioInput(audioInputs[selectBox.selectedIndex]);
          if(started){ setLocalMediaAudioInput(audioInputs[selectBox.selectedIndex]); }
        }
      });
  
      getVideoInputs().then(function(videoInputs) {
        const selectBox = document.getElementById("videoInputs");
        for (var i=0; i<videoInputs.length; i++) {
            var option = document.createElement("option");
            option.text = videoInputs[i].getName();
            if(getVideoInput()._name === option.text) {
              option.selected = true
            }
            selectBox.add(option);
        }
        selectBox.onchange = function() { 
          setVideoInput(videoInputs[selectBox.selectedIndex]);
          if(started){ setLocalMediaVideoInput(videoInputs[selectBox.selectedIndex]); }
        }
      });
    })
  }

  function getAudioInput() {
    return modalMedia.getAudioSourceInput()
  }

  function getVideoInput() {
    return modalMedia.getVideoSourceInput()
  }

  function clearInputs() {
    // Remove the lists of available devices.
    document.getElementById("audioInputs").innerHTML = '';
    document.getElementById("videoInputs").innerHTML = '';
  }

  function destroy() {
    stopModalMedia();
    modalLayoutManager.reset();
    modalMedia.destroy();
    clearInputs();
  }

  return { 
    init: init,
    getAudioInput: getAudioInput,
    getVideoInput: getVideoInput,
    destroy: destroy,
  }
}