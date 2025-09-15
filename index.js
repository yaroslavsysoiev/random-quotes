import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import { handleFavourite } from './src/favoritesHandler.js';

const generateBtn = document.getElementById('generate-btn');
const toggleFavouriteBtn = document.getElementById('toggle-favourite-btn');

let currentQuoteIndex = null;
let currentQuote = null;

function displayQuote(quote) {
  const { text, author, isFavourite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavourite(isFavourite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function generateAndDisplayRandomQuote() {
  const randomQoute = chooseRandomQuote(quotes);
  currentQuote = randomQoute;
  displayQuote(randomQoute);
}

generateBtn.addEventListener('click', generateAndDisplayRandomQuote);

export { currentQuote };
