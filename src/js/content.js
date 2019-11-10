document.addEventListener('mousedown', function(event){
  if (event.button !== 2) return;

  var selectedText = window.getSelection().toString();

  if (event.button === 2 && selectedText !== '') {
    chrome.extension.sendMessage({
      signal: 'updateContextMenu',
      selectedText
    });
  }
});
