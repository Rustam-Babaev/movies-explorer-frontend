import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards, onCardLike, onCardDelete, onCardClick, isSavedCards }) {
  const PAGE_SIZE = 8;
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const handleMoreClick = () => setIndex(index + 8);
  useEffect(() => {
    const numberOfItems = PAGE_SIZE + index;

    const newArray = [];

    for (let i = 0; i < cards.length; i++) {
      if (i < numberOfItems) newArray.push(cards[i]);
    }

    setVisibleData(newArray);
  }, [cards, index]);

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        {visibleData.map((card) => (
          <MoviesCard
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            isSavedCards={isSavedCards}
          ></MoviesCard>
        ))}
      </div>
      {cards.length > 7 && (
        <button aria-label="Показать еще" className="movie-card-list__more" onClick={handleMoreClick}>
          Еще
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
