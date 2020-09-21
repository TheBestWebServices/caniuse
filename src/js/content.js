!function() {
  document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString();

    if (!selectedText) return;

    chrome.extension.sendMessage({
      signal: 'updateContextMenu',
      selectedText,
    });
  });
}();
