function submitForm() {
    // Get user inputs
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const style = document.getElementById('style').value.trim();
    const responseDiv = document.getElementById('response');

    // Validate inputs
    if (!name || !gender || !style) {
        responseDiv.style.color = 'red';
        responseDiv.textContent = "Please fill out all fields!";
        return;
    }

    // Generate a response
    let response = `Hello, ${name}! `;
    if (gender === "Boy" || gender === "Girl") {
        response += `As a ${gender}, we will prepare the ${style} style for you.`;
    } else {
        response += "Invalid input for gender.";
    }

    // Display response
    responseDiv.style.color = 'green';
    responseDiv.textContent = response;
}
