window.addEventListener('contextmenu', () => {
  const selectedText = window.getSelection().toString();

  if (selectedText !== '') {
    chrome.extension.sendMessage({
      signal: 'updateContextMenu',
      selectedText
    });
  }
});
