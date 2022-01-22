import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

function MoviesCard({ card, isSavedCards = false, onCardLike, onCardDelete }) {
  const language = useSelector((state) => state.language.language);
  const deleteLoadingId = useSelector((state) => state.loader.deleteLoadingId);
  const savedMovies = useSelector((state) => state.movies.savedMovies);
  const [isSaved, setIsSaved] = useState(false);
  const cardLikeIconClassName = `movies-card__like-button ${isSaved && "movies-card__like-button_active"}`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  useEffect(() => {
    setIsSaved(savedMovies.some((movie) => movie.movieId === card.movieId));
  }, [card.movieId, savedMovies]);

  return (
    <figure className="movies-card">
      <a target="_blank" href={card.trailer} rel="noreferrer">
        <img src={card.image} alt={card.nameRU} className="movies-card__image" />
      </a>
      <figcaption className="movies-card__footer">
        <div className="movies-card__description-container">
          <h2 className="movies-card__title">{language === "ru" ? card.nameRU : language === "en" && card.nameEN}</h2>
          {isSavedCards ? (
            deleteLoadingId === card._id ? (
              <Spinner></Spinner>
            ) : (
              <button type="button" aria-label="Удалить" className="movies-card__delete-button" onClick={handleDeleteClick}></button>
            )
          ) : deleteLoadingId === card._id ? (
            <Spinner></Spinner>
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
