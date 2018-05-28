chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    var goGetPath;
    goGetPath = "go get -u " + window.location.href.split(window.location.protocol + "//")[1];
    copyTextToClipboard(goGetPath);
    sendResponse(goGetPath);
});

function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}
