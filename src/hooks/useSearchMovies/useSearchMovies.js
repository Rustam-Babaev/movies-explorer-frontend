import { useState } from "react";

export function useSearchMovies() {
  const [foundMovies, setFoundMovies] = useState([]);

  const handleSearchMovies = (moviesName = "", isShort = false, moviesData, isSavedMovies = false) => {
    const reg = new RegExp(`${moviesName}`, "i");
    if (isSavedMovies && !moviesName) {
      if (isShort) {
        setFoundMovies(moviesData.filter(({ duration }) => duration <= 40));
      } else {
        return setFoundMovies(moviesData);
      }
    }
    if (!moviesData) {
      return setFoundMovies([]);
    }
    const films = moviesData.filter(({ nameRU, nameEN, duration }) => {
      const filmName = nameRU + " " + nameEN;
      if (!isShort) {
        if (reg.test(filmName)) {
          return true;
        }
      } else if (duration <= 40 && reg.test(filmName)) {
        return true;
      }
      return false;
    });

    setFoundMovies(handleFormatMovies(films));
  };

  const handleFormatMovies = (movies) => {
    if (movies.length === 0) {
      return movies;
    } else if (!Object.keys(movies[0]).includes("id")) {
      return movies;
    }

    return movies.map((film) => {
      const formattedFilm = {};
      formattedFilm.country = film.country;
      formattedFilm.director = film.director;
      formattedFilm.duration = film.duration;
      formattedFilm.year = film.year;
      formattedFilm.description = film.description;
      formattedFilm.image = "https://api.nomoreparties.co" + film.image.url;
      formattedFilm.trailer = film.trailerLink;
      formattedFilm.thumbnail = "https://api.nomoreparties.co" + film.image.formats.thumbnail.url;
      formattedFilm.movieId = film.id;
      formattedFilm.nameRU = film.nameRU;
      formattedFilm.nameEN = film.nameEN;
      return formattedFilm;
    });
  };

  return [foundMovies, handleSearchMovies];
}
