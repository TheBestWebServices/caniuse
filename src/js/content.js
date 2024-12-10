!function() {
  document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString();

    if (!selectedText) return;

    chrome.runtime.sendMessage({
      signal: 'updateContextMenu',
      selectedText,
    });
  });
}();
