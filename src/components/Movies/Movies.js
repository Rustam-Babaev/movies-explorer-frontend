import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { initialCards } from "../../utils/constants";

function Movies() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <main>
        <SearchForm></SearchForm>
        <MoviesCardList cards={initialCards}></MoviesCardList>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Movies;
