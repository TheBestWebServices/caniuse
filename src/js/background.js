(function() {
  const id = 'caniuse-finder';

  function createContextMenu() {
    chrome.contextMenus.create({
      'id': id,
      'title': chrome.i18n.getMessage('context_menu_title'),
      'contexts': ['selection']
    });
  }

  function updateContextMenu(selectedText) {
    chrome.contextMenus.update(id, {
      'title': chrome.i18n.getMessage('context_menu_title').replace('{{ selected }}', selectedText)
    });
  }

  createContextMenu();

  chrome.contextMenus.onClicked.addListener((info) => {
    chrome.tabs.create({ url: `https://caniuse.com/#search=${info.selectionText}` });
  });

  chrome.runtime.onMessage.addListener((response) => {
    switch (response.signal) {
      case 'updateContextMenu':
        updateContextMenu(response.selectedText);
        break;
      default:
        updateContextMenu(response.selectedText);
    }
  });
})();
