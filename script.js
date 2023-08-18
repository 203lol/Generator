const quoteText = document.getElementById('quoteText');
const prevBtn = document.getElementById('prevBtn');
const randomBtn = document.getElementById('randomBtn');
const nextBtn = document.getElementById('nextBtn');
const categorySelect = document.getElementById('category');
const modeSwitch = document.getElementById('modeSwitch');
const decreaseFontBtn = document.getElementById('decreaseFont');
const increaseFontBtn = document.getElementById('increaseFont');

const quotes = {
    science: [
        "Science is magic that works.",
        "The important thing is not to stop questioning.",
    ],
    inspiration: [
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
    ],
};
let currentCategory = 'science';
let currentQuoteIndex = 0;
let darkMode = false;
let fontSize = 18;

function updateQuote() {
    quoteText.textContent = quotes[currentCategory][currentQuoteIndex];
    quoteText.style.fontSize = `${fontSize}px`;
}

prevBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    updateQuote();
});
nextBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    updateQuote();
});

randomBtn.addEventListener('click', () => {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    updateQuote();
});

categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    currentQuoteIndex = 0;
    updateQuote();
});
modeSwitch.addEventListener('change', () => {
    darkMode = modeSwitch.checked;
    document.body.style.backgroundColor = darkMode ? '#333' : '#f0f0f0';
    document.body.style.color = darkMode ? 'red' : '#000';
});

decreaseFontBtn.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 2, 12);
    updateQuote();
});

increaseFontBtn.addEventListener('click', () => {
    fontSize += 2;
    updateQuote();
});

updateQuote();