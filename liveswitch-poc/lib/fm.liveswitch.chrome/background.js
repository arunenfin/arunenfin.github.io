var baseDataSources = ['screen', 'window'];
if (getChromeVersion() >= 50) {
    baseDataSources.push('tab');
}
var desktopMediaRequestId = '';

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(message) {
        if (message.type == 'chooseDesktopMedia') {
            var dataSources = baseDataSources.slice();
            if (message.audio) {
                if (getChromeVersion() >= 50) {
                    dataSources.push('audio');
                } else {
                    port.postMessage({
                        type: 'chooseDesktopMediaFailure',
                        audioUnavailable: true
                    });
                    return;
                }
            }
            var tab = port.sender.tab;
            if (message.origin) {
                tab.url = message.origin;
            }
            desktopMediaRequestId = chrome.desktopCapture.chooseDesktopMedia(dataSources, tab, function(streamId) {
                if (streamId) {
                    port.postMessage({
                        type: 'chooseDesktopMediaSuccess',
                        streamId: streamId
                    });
                } else {
                    port.postMessage({
                        type: 'chooseDesktopMediaFailure'
                    });
                }
            });
        }
        else if (message.type == 'cancelChooseDesktopMedia') {
            chrome.desktopCapture.cancelChooseDesktopMedia(desktopMediaRequestId);
            port.postMessage({
                type: 'cancelChooseDesktopMediaComplete'
            });
        }
        else if (message.type == 'testActive') {
            port.postMessage({
                type: 'active'
            });
        }
    });
});

function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : -1;
}