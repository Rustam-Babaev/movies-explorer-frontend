import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedCards } from "../../utils/constants";

function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <main>
        <SearchForm></SearchForm>
        <MoviesCardList cards={savedCards} isSavedCards={true}></MoviesCardList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
