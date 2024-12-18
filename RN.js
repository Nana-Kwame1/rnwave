// Function to go back to the previous page
function goBack() {
    window.history.back();
}
// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you shortly.");
});
