import { currentQuote } from '../index.js';

const toggleBtn = document.getElementById('toggle-favourite-btn');
const favoritesContainer = document.getElementById('favorites-container');

toggleBtn.addEventListener('click', toggleFavourite);

hideBtn(toggleBtn);

function toggleFavourite() {
  currentQuote.isFavourite = !currentQuote.isFavourite;
  toggleFavoriteIcon(currentQuote.isFavourite, toggleBtn);

  if (currentQuote.isFavourite) {
    showFavouriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function handleFavourite(isFavourite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavourite, toggleBtn);
}

function toggleFavoriteIcon(isFavourite, el) {
  el.classList.toggle('fa', isFavourite);
  el.classList.toggle('far', !isFavourite);
}

function showBtn() {
  toggleBtn.style.display = 'inline-block';
}

function hideBtn() {
  toggleBtn.style.display = 'none';
}

function showFavouriteCard(text, author, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
    <p>${text}</p>
    <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

export {
  handleFavourite,
  toggleFavoriteIcon,
  showBtn,
  showFavouriteCard,
  hideFavoriteCard,
};
