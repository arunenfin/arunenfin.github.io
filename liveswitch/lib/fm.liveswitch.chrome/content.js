var port = chrome.runtime.connect(chrome.runtime.id);
port.onMessage.addListener(function (message) {
    message.namespace = 'fm.liveswitch.webrtc';
    window.postMessage(message, '*');

    message.namespace = 'fm.liveswitch.chrome';
    window.postMessage(message, '*');
});

window.addEventListener('message', function(event) {
    if (event.source == window) {
        var message = event.data;
        if (message.namespace && message.namespace == 'fm.liveswitch.webrtc' || message.namespace == 'fm.liveswitch.chrome') {
            port.postMessage(message);
        }
    }
});

window.postMessage({
    namespace: 'fm.liveswitch.webrtc',
    type: 'active'
}, '*');

window.postMessage({
    namespace: 'fm.liveswitch.chrome',
    type: 'active'
}, '*');