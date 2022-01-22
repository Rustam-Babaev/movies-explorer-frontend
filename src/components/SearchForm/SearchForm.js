import React from "react";
import { useSelector } from "react-redux";
import { useFormWithValidation } from "../../hooks/useFormWithValidation/useFormWithValidation";
import { MOVIES, SHORT__MOVIE, SEARCH } from "../../utils/constants";

function SearchForm({ onSearchMovies, onChangeShort, moviesName, isSavedMovies = false }) {
  const isLoading = useSelector((state) => state.loader.isLoading);
  const language = useSelector((state) => state.language.language);
  const searchWord = moviesName ? moviesName : MOVIES[language];
  const [values, handleChange, errors, isValid] = useFormWithValidation();
  const { movie } = values;
  const checkboxClassName = isLoading ? "search-form__checkbox search-form__checkbox_disable" : "search-form__checkbox";
  const submitClassName = isLoading ? "search-form__submit search-form__submit_disable" : "search-form__submit";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isValid && onSearchMovies(movie);
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
          required
          className="search-form__input"
          onChange={handleChange}
        />
        <input type="submit" value={SEARCH[language]} className={submitClassName} disabled={isLoading} />
      </div>
      <span className="search-form__input-error">{errors.movie}</span>
      <div className="search-form__filter-container">
        <div className="search-form__checkbox-container">
          <input
            type="checkbox"
            id="filterShortMovie"
            name="filterShortMovie"
            className={checkboxClassName}
            onChange={handleChangeCheckbox}
            defaultChecked={localStorage.getItem("isShort") === "true" ? !isSavedMovies && true : false}
            disabled={isLoading}
          />
          <label htmlFor="filterShortMovie" className="search-form__checkbox-flag"></label>
        </div>
        <p className="search-form__checkbox-name">{SHORT__MOVIE[language]}</p>
      </div>
      <hr className="search-form__underline" />
    </form>
  );
}

export default SearchForm;
