'use strict';

let goToUrl = document.getElementById('goToUrl');
let url = document.getElementById('textId');

url.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && url.value) {
  chrome.storage.sync.get('defaultUrl', function(data) {
    var newUrl = data.defaultUrl+url.value;
    chrome.tabs.update({
      url: newUrl
    });
  });
  }
});
