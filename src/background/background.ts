// Listen for installation or update of the extension
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome Extension installed or updated");
});

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SOME_ACTION") {
    // Handle the action
    console.log("Received action:", message.payload);
    // Perform some background task if needed
    sendResponse({ status: "Action received" });
  }
  return true; // Indicates that the response will be sent asynchronously
});

// You can add more background script functionality here
// For example, setting up alarm for periodic tasks, handling browser events, etc.
