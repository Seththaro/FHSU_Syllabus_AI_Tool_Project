document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    const responseBox = document.getElementById('response');

    // Example: Simple echo response (replace with actual API call)
    responseBox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
    responseBox.innerHTML += `<div><strong>AI:</strong> ${userInput}</div>`; // Replace with API response

    document.getElementById('user-input').value = ''; // Clear input
});
