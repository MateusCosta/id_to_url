
let saveButton = document.getElementById("saveButton");
let url = document.getElementById("textUrl");


saveButton.addEventListener('click', function() {
    if(url.value){
        var expression = /[https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)\/?/gi;
        var regex = new RegExp(expression);
        if (!url.value.match(regex)) {
            alert("Invalid URL");
            return;
        } 

        chrome.storage.sync.set({defaultUrl: url.value}, function() {
            alert(`Url updated to ${url.value}`);
          })
    }
})