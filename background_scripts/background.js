// Function to handle clicks on the context menu
function onTileImageClick(info, tab) {
    if (info && info.srcUrl) {
        // Construct the URL for the new tab
        const tilePageUrl = chrome.runtime.getURL("tile.html") + "?image=" + encodeURIComponent(info.srcUrl);

        // Create a new tab with the tilePageUrl
        chrome.tabs.create({ url: tilePageUrl });
    }
}

// Create the context menu item when the extension is installed/updated
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "tileImage",
        title: "Tile Image",
        contexts: ["image"],
    });
});

// Add click event listener for the context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "tileImage") {
        onTileImageClick(info, tab);
    }
});
