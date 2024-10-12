let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function appendToDisplay(value) {
    if (value === '+/-') {
        display.innerText = display.innerText.startsWith('-')
            ? display.innerText.slice(1)
            : '-' + display.innerText;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch {
        display.innerText = 'Error';
    }
}

