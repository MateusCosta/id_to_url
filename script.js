chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({defaultUrl: 'https://www.youtube.com/watch?v='}, function() {
        console.log("default url in storage");
      });
});