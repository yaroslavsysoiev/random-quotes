function toggleFavoriteIcon(isFavourite, el) {
  el.classList.toggle('fa', isFavourite);
  el.classList.toggle('far', !isFavourite);
}

function showFavouriteCard(quote, author, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavouriteCard, hideFavoriteCard };
