!function() {
  const id = 'caniuse-finder';

  function createContextMenu() {
    chrome.contextMenus.create({
      'id': id,
      'title': chrome.i18n.getMessage('context_menu_title'),
      'contexts': ['selection'],
    });
  }

  function updateContextMenu(selectedText) {
    chrome.contextMenus.update(id, {
      'title': chrome.i18n.getMessage('context_menu_title').replace('{{ selected }}', formatSelectedText(selectedText)),
    });
  }

  function openCaniuseSite(selectedText) {
    chrome.tabs.create({ url: `https://caniuse.com/?search=${selectedText}` });
  }

  function formatSelectedText(selectedText) {
    return selectedText.trim();
  }

  createContextMenu();

  chrome.contextMenus.onClicked.addListener((info) => {
    openCaniuseSite(info.selectionText); // info.selectionText trimmed automatically
  });

  chrome.action.onClicked.addListener(() => {
    openCaniuseSite('');
  });

  chrome.runtime.onMessage.addListener((response) => {
    switch (response.signal) {
      case 'updateContextMenu':
        setTimeout(() => updateContextMenu(response.selectedText));
        break;
      default:
        console.error('Undefined signal');
    }
  });
}();
