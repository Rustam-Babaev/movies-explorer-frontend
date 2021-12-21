import React, { useState } from "react";

function SearchForm({ onSearchMovies, onChangeShort, moviesName }) {
  const searchWord = moviesName ? moviesName : "Фильм";
  const [movie, setMovie] = useState("");
  const [errmovie, setErrMovie] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.movieInput.validity.valid) {
      onSearchMovies(movie);
    } else if (evt.target.movieInput.validity.tooShort || evt.target.movieInput.validity.valueMissing) {
      setErrMovie("Нужно ввести ключевое слово");
    } else {
      setErrMovie(evt.validationMessage);
    }
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setMovie(value);
  };

  const handleChangeCheckbox = (evt) => {
    onChangeShort(evt.target.checked);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div action="" className="search-form__container">
        <input
          type="text"
          name="movie"
          id="movieInput"
          placeholder={searchWord}
          minLength="2"
          maxLength="50"
          required
          className="search-form__input"
          onChange={handleChange}
        />
        <input type="submit" value="Поиск" className="search-form__submit" />
      </div>
      <span className="search-form__input-error">{errmovie}</span>
      <div className="search-form__filter-container">
        <div className="search-form__checkbox-container">
          <input
            type="checkbox"
            id="filterShortMovie"
            name="filterShortMovie"
            className="search-form__checkbox"
            onChange={handleChangeCheckbox}
            defaultChecked={localStorage.getItem("isShort") === "true" ? true : false}
          />
          <label htmlFor="filterShortMovie" className="search-form__checkbox-flag"></label>
        </div>
        <p className="search-form__checkbox-name">Короткометражки</p>
      </div>
      <hr className="search-form__underline" />
    </form>
  );
}

export default SearchForm;
