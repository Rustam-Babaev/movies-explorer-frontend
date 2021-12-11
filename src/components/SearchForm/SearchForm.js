import React, { useState, useEffect } from "react";

function SearchForm() {
  const [movie, setMovie] = useState("");
  const [errmovie, setErrMovie] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setMovie(value);
    setErrMovie(evt.target.validationMessage);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div action="" className="search-form__container">
        <input
          type="text"
          name="movie"
          id="movie-input"
          placeholder="Фильм"
          minLength="2"
          maxLength="50"
          required
          className="search-form__input"
          onChange={handleChange}
        />
        <input type="submit" value="Поиск" className="search-form__submit" />
      </div>
      <span className="search-form__input-error">{errmovie}</span>
      <div class="search-form__filter-container">
        <div class="search-form__checkbox-container">
          <input type="checkbox" id="filterShortMovie" name="filterShortMovie" className="search-form__checkbox" />
          <label for="filterShortMovie" className="search-form__checkbox-flag"></label>
        </div>
        <p className="search-form__checkbox-name">Короткометражки</p>
      </div>
      <hr className="search-form__underline" />
    </form>
  );
}

export default SearchForm;
