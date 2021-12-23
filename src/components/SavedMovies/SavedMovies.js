import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { apiSavedMovies } from "../../utils/MainApi";
import { useSearchMovies } from "../../hooks/useSearchMovies/useSearchMovies";
import { setLoader, setFilteredMovies, setSavedMovies, setLoaderDelete } from "../../redux/actions";
import { MESSAGE_NOT_FOUND } from "../../utils/constants";

function SavedMovies() {
  const dispatch = useDispatch();
  const [foundMovies, handleSearchMovies] = useSearchMovies();
  const [isShort, setIsShort] = useState(false);
  const [moviesName, setMoviesName] = useState("");
  const savedMovies = useSelector((state) => state.movies.savedMovies);
  const filteredMovies = useSelector((state) => state.movies.filteredMovies);
  const isLoading = useSelector((state) => state.loader.isLoading);

  const handleSearchMovie = (moviesName) => {
    dispatch(setLoader(true));
    setMoviesName(moviesName);
    handleSearchMovies(moviesName, isShort, savedMovies, true);
    dispatch(setLoader(false));
  };

  const handleChangeShort = (isShort) => {
    setIsShort(isShort);
    handleSearchMovies(moviesName, isShort, savedMovies, true);
  };

  const handleMovieDelete = (movie) => {
    dispatch(setLoaderDelete(movie._id));
    apiSavedMovies
      .deleteMovieRequest(movie._id)
      .then(() => dispatch(setSavedMovies(savedMovies.filter((film) => film._id !== movie._id))))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(setLoader(true));
    const checkMovies = () => {
      apiSavedMovies
        .getSavedMovies()
        .then((res) => {
          dispatch(setSavedMovies(res.data));
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoader(false)));
    };
    checkMovies();
  }, []);

  useEffect(() => {
    dispatch(setFilteredMovies(foundMovies));
  }, [dispatch, foundMovies]);

  useEffect(() => {
    handleSearchMovies(moviesName, isShort, savedMovies, true);
  }, [dispatch, foundMovies, handleSearchMovies, isShort, moviesName, savedMovies]);

  return (
    <>
      <div className="saved-movies">
        <Header>
          <Navigation></Navigation>
        </Header>
        <main>
          <SearchForm onSearchMovies={handleSearchMovie} onChangeShort={handleChangeShort}></SearchForm>
          {filteredMovies.length === 0 ? (
            moviesName && !isLoading && <p className="movies__search-result">{MESSAGE_NOT_FOUND}</p>
          ) : (
            <MoviesCardList cards={filteredMovies} isSavedCards={true} onCardDelete={handleMovieDelete}></MoviesCardList>
          )}
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
export default SavedMovies;
