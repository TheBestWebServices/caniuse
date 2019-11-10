!function() {
  document.addEventListener('mouseup', () => {
    var selectedText = window.getSelection().toString();

    if (!selectedText) return;

    chrome.extension.sendMessage({
      signal: 'updateContextMenu',
      selectedText
    });
  });
}();
