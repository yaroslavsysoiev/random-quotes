import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavouriteBtn = document.getElementById('toggle-favourite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = null;
console.log(currentQuoteIndex);

function toggleFavoriteIcon(isFavourite) {
  toggleFavouriteBtn.classList.toggle('fa', isFavourite);
  toggleFavouriteBtn.classList.toggle('far', !isFavourite);
}

function showFavouriteCard(quote, author) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>
    `;
  favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomQuote.isFavourite);

  toggleFavouriteBtn.style.display = 'inline-block';
}

function toggleFavourite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavoriteIcon(currentQuote.isFavourite);

  if (currentQuote.isFavourite) {
    showFavouriteCard(currentQuote.quote, currentQuote.author);
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavouriteBtn.addEventListener('click', toggleFavourite);

// generateRandomQuote();
