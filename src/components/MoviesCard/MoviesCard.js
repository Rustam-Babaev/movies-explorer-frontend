import React from "react";

function MoviesCard({ card, isSavedCards = false, onCardLike, onCardDelete }) {
  const user = {
    _id: 111,
  };
  const isLiked = card.likes.some((i) => i === user._id);
  const cardLikeIconClassName = `movies-card__like-button ${isLiked && "movies-card__like-button_active"}`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <figure className="movies-card">
      <img src={card.link} alt={card.name} className="movies-card__image" />
      <figcaption className="movies-card__footer">
        <div className="movies-card__description-container">
          <h2 className="movies-card__title">{card.name}</h2>
          {isSavedCards ? (
            <button type="button" aria-label="Удалить" className="movies-card__delete-button" onClick={handleDeleteClick}></button>
          ) : (
            <button type="button" aria-label="Поставить лайк" className={cardLikeIconClassName} onClick={handleLikeClick}></button>
          )}
        </div>
        <hr className="movies-card__underline" />
        <p className="movies-card__duration">{card.duration}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
