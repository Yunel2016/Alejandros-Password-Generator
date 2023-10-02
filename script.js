document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('password-generator-form');
    const passwordDisplay = document.getElementById('password-display');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const passwordLength = parseInt(document.getElementById('password-length').value);
        const lowercaseIncluded = document.getElementById('lowercase-checkbox').checked;
        const uppercaseIncluded = document.getElementById('uppercase-checkbox').checked;
        const numericIncluded = document.getElementById('numeric-checkbox').checked;
        const specialIncluded = document.getElementById('special-checkbox').checked;

        if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
            alert('Password length must be between 8 and 128 characters.');
            return;
        }

        if (!(lowercaseIncluded || uppercaseIncluded || numericIncluded || specialIncluded)) {
            alert('Select at least one character type.');
            return;
        }

        const password = generatePassword(passwordLength, lowercaseIncluded, uppercaseIncluded, numericIncluded, specialIncluded);

        passwordDisplay.textContent = 'Generated Password: ' + password;
    });

    function generatePassword(length, lowercase, uppercase, numeric, special) {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numericChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let availableChars = '';
        if (lowercase) availableChars += lowercaseChars;
        if (uppercase) availableChars += uppercaseChars;
        if (numeric) availableChars += numericChars;
        if (special) availableChars += specialChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }

        return password;
    }
});
