import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloder from "../Preloader/Preloader";
import useViewSize from "../../hooks/useViewSize/useViewSize";

function MoviesCardList({ cards, onCardLike, onCardDelete, onCardClick, isSavedCards }) {
  const isLoading = useSelector((state) => state.loader.isLoading);
  let PAGE_SIZE = 0;
  let more = 0;
  const [viewSize] = useViewSize(window.innerWidth);
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);
  const handleMoreClick = () => setIndex(index + more);

  if (viewSize > 768) {
    PAGE_SIZE = 12;
    more = 4;
  } else if (viewSize < 768 && viewSize > 320) {
    PAGE_SIZE = 8;
    more = 2;
  } else {
    PAGE_SIZE = 5;
    more = 2;
  }

  useEffect(() => {
    const numberOfItems = PAGE_SIZE + index;
    const newArray = [];
    for (let i = 0; i < cards.length; i++) {
      if (i < numberOfItems) newArray.push(cards[i]);
    }
    setVisibleData(newArray);
    setIsShowMore(newArray.length < cards.length ? true : false);
  }, [PAGE_SIZE, cards, index]);

  return (
    <div className="movies-card-list">
      {isLoading ? (
        <div className="movies-card-list__preloader-container">
          <Preloder></Preloder>
        </div>
      ) : (
        <>
          <div className="movies-card-list__container">
            {visibleData.map((card) => (
              <MoviesCard
                card={card}
                key={card.movieId}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
                isSavedCards={isSavedCards}
              ></MoviesCard>
            ))}
          </div>
          {isShowMore && (
            <button aria-label="Показать еще" className="movie-card-list__more" onClick={handleMoreClick}>
              Еще
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
