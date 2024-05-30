// // Function to fetch emails from the user's Gmail account
// async function fetchEmails() {
//     const token = await getToken(); // Function to get the access token
//     const response = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages', {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     });
//     const data = await response.json();
//     console.log('Emails:', data);
// }

// // Call the fetchEmails function to fetch emails
// fetchEmails();

document.addEventListener("DOMContentLoaded", function () {
  var authorizeButton = document.getElementById("authorizeButton");

  authorizeButton.addEventListener("click", function () {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }
      // Use the token to make Gmail API requests
      fetch(
        "https://script.google.com/macros/s/AKfycbzQulRiWgSMXbMVrOi5RWRwwztXs44OX21k7YQSDDlDH9Gc9yYJ7k0X8zrGNMQgORqm0g/exec",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("output").innerText = JSON.stringify(
            data,
            null,
            2
          );
        })
        .catch((error) => console.error(error));
    });
  });
});
