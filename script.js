import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavouriteBtn = document.getElementById('toggle-favourite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex = null;
console.log(currentQuoteIndex);

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavouriteBtn.textContent = randomQuote.isFavourite
    ? 'Remove from favourites'
    : 'Add to favourites';

  toggleFavouriteBtn.style.display = 'inline-block';
}

function toggleFavourite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavouriteBtn.textContent = currentQuote.isFavourite
    ? 'Remove from favourites'
    : 'Add to favourites';

  if (currentQuote.isFavourite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
    <p>${currentQuote.quote}</p>
    <p class="author">${currentQuote.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavouriteBtn.addEventListener('click', toggleFavourite);

// generateRandomQuote();
