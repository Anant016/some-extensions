chrome.browserAction.onClicked.addListener(function(tab) {
  //tab.url = myURL; // doesn't work!
  chrome.tabs.update({ url: tab.url });
  chrome.tabs.reload(tab.tabId); // reload the page
  console.log("loading.. " + tab.url);
});
