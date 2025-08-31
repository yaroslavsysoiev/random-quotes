const quotes = ['Quote 1', 'Quote 2', 'Quote 3 - Author 3'];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener();

generateBtn.addEventListener('click', generateRandomQuote);

// generateRandomQuote();
