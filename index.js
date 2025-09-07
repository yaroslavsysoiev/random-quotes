import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import {
  hideFavoriteCard,
  showFavouriteCard,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavouriteBtn = document.getElementById('toggle-favourite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = null;
console.log(currentQuoteIndex);

function generateRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  const { quote, author } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomIndex.isFavourite, toggleFavouriteBtn);
  toggleFavouriteBtn.style.display = 'inline-block';
}

function toggleFavourite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavoriteIcon(currentQuote.isFavourite, toggleFavouriteBtn);

  if (currentQuote.isFavourite) {
    showFavouriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavouriteBtn.addEventListener('click', toggleFavourite);

// generateRandomQuote();
