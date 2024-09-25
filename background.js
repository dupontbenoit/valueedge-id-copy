chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const ticketType = document
        .querySelector(".entity-initials-text")
        .textContent.trim();
      const ticketId = document
        .querySelector(".entity-form-document-view-header-entity-id-container")
        .textContent.trim();
      const gitBranch = `${ticketType}-${ticketId}`;
      navigator.clipboard.writeText(gitBranch);
    },
  });
});
