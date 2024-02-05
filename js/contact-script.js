function validateForm() {
    // Reset previous error
    clearErrors();

    // Form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Name
    if (name.length <= 5) {
        displayError('name', 'Name should be more than 5 characters long.');
    }

    // Email
    if (!isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address.');
    }

    // Subject
    if (subject.length <= 15) {
        displayError('subject', 'Subject should be more than 15 characters long.');
    }

    // Message
    if (message.length <= 25) {
        displayError('message', 'Message should be more than 25 characters long.');
    }
}

function isValidEmail(email) {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = message;
    document.getElementById(field).insertAdjacentElement('afterend', errorElement);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.remove());
}