document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // You can add form validation or send the form data to a server here

    // Display a success message
    document.getElementById('form-response').innerText = "Thank you for your message! I'll get back to you soon.";

    // Reset the form
    this.reset();
});