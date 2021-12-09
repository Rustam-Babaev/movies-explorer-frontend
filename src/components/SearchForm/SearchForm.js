import React from "react";

function SearchForm() {
  return (
    <form className="search-form">
      <div action="" className="search-form__container">
        <input type="text" className="search-form__input" name="Movie" defaultValue="Фильм" />
        <input type="submit" value="Поиск" className="search-form__submit" />
      </div>
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
