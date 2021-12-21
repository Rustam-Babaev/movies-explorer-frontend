import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import { apiSavedMovies } from "../../utils/MainApi";
import { useSearchMovies } from "../../hooks/useSearchMovies/useSearchMovies";
import { setLoader, setFilteredMovies, setSavedMovies } from "../../redux/actions";

function Movies({ onInfoTooltip }) {
  const dispatch = useDispatch();
  const filteredMovies = useSelector((state) => state.movies.filteredMovies);
  const savedMovies = useSelector((state) => state.movies.savedMovies);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const [isShort, setIsShort] = useState(localStorage.getItem("isShort") === "true" ? true : false);
  const [moviesName, setMoviesName] = useState(localStorage.getItem("moviesName"));
  const [foundMovies, handleSearchMovies] = useSearchMovies();

  const handleSearchMovie = (moviesName) => {
    dispatch(setLoader(true));
    setMoviesName(moviesName);
    localStorage.setItem("moviesName", moviesName);
    Promise.all([moviesApi.getMovies(), apiSavedMovies.getSavedMovies()])
      .then(([moviesDB, savedMovies]) => {
        localStorage.setItem("moviesData", JSON.stringify(moviesDB));
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies.data));
        dispatch(setSavedMovies(savedMovies.data));
        handleSearchMovies(moviesName, isShort, moviesDB);
      })
      .catch((err) => {
        onInfoTooltip(
          true,
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        console.log(err);
      })
      .finally(() => dispatch(setLoader(false)));
  };

  const handleMovieLike = (movie) => {
    const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId);
    let newSavedMovies = [];
    if (savedMovie) {
      apiSavedMovies
        .deleteMovieRequest(savedMovie._id)
        .then((res) => {
          newSavedMovies = savedMovies.filter((film) => film._id !== savedMovie._id);
          dispatch(setSavedMovies(newSavedMovies));
        })
        .catch((err) => console.log(err));
    } else {
      apiSavedMovies
        .addMoviesRequest(movie)
        .then(({ data }) => {
          newSavedMovies = [...savedMovies, data];
          dispatch(setSavedMovies(newSavedMovies));
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChangeShort = (isShort) => {
    setIsShort(isShort);
    localStorage.setItem("isShort", isShort);
    handleSearchMovies(moviesName, isShort, JSON.parse(localStorage.getItem("moviesData")));
  };

  useEffect(() => {
    dispatch(setFilteredMovies(foundMovies));
  }, [dispatch, foundMovies]);

  useEffect(() => {
    handleSearchMovies(moviesName, isShort, JSON.parse(localStorage.getItem("moviesData")));
  }, []);

  return (
    <>
      <div className="movies">
        <Header>
          <Navigation></Navigation>
        </Header>
        <main>
          <SearchForm onSearchMovies={handleSearchMovie} onChangeShort={handleChangeShort} moviesName={moviesName}></SearchForm>
          {filteredMovies.length === 0 ? (
            moviesName && !isLoading && <p className="movies__search-result">Ничего не найдено</p>
          ) : (
            <MoviesCardList cards={filteredMovies} onCardLike={handleMovieLike}></MoviesCardList>
          )}
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Movies;
