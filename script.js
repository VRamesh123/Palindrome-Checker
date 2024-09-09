document.getElementById('check-btn').addEventListener('click', checkPalindrome);

function checkPalindrome() {
    const inputText = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    
    if (inputText.trim() === '') {
        alert('Please input a value');
        return;
    }
    
    const sanitizedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = sanitizedText.split('').reverse().join('');
    
    if (sanitizedText === reversedText) {
        result.textContent = `${inputText} is a palindrome`;
        result.style.color = 'green';
    } else {
        result.textContent = `${inputText} is not a palindrome`;
        result.style.color = 'red';
    }
}
