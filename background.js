// Function to handle user authentication
function authenticate() {
  chrome.identity.getAuthToken({ interactive: true }, function (token) {
    // Use the token to make requests to the Gmail API
    console.log("Access token:", token);
  });
}

// Call the authenticate function when the extension is loaded
authenticate();
