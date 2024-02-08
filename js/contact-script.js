function validateForm() {
    clearErrors();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name.length <= 5) {
        displayError('name', 'Name should be more than 5 characters long.');
    }

    if (!isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address.');
    }

    if (subject.length <= 15) {
        displayError('subject', 'Subject should be more than 15 characters long.');
    }

    if (message.length <= 25) {
        displayError('message', 'Message should be more than 25 characters long.');
    }
}

function isValidEmail(email) {
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