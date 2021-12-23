import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { apiAuth } from "../../utils/MainApi";
import { apiSavedMovies } from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { setCurrentUser, loggedIn, setLoader, setSavedMovies, setMoviesData } from "../../redux/actions";
import { ERR_DEFAULT_MESSAGE } from "../../utils/constants";
//Хотя проект не большой и не глубокий, но в нем использовал Redux,
//чтобы научиться им пользоваться и показать будующим работадателям, что знаком с Redux и могу его использовать

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isConfirmInfoTooltip, setIsConfirmInfoTooltip] = useState(false);
  const [isOpenInfoTooltip, setIsOpenInfoTooltip] = useState(false);
  const [messageInfoTooltip, setMessageInfoTooltip] = useState("");

  const handleLogin = (email, password) => {
    apiAuth
      .authorize(email, password)
      .then((res) => {
        handleInfoTooltip(true);
        dispatch(loggedIn(true));
        navigate("/movies");
      })
      .catch((err) => {
        err.json().then((err) => {
          handleInfoTooltip(false, err.message);
          console.log(err);
        });
      });
  };

  const handleInfoTooltip = (confirm, message) => {
    setIsOpenInfoTooltip(true);
    setIsConfirmInfoTooltip(confirm);
    setMessageInfoTooltip(message);
  };

  const handleClosePopup = () => {
    setIsOpenInfoTooltip(false);
  };

  useEffect(() => {
    const tokenCheck = () => {
      apiAuth
        .checkToken()
        .then((res) => {
          if (res) {
            dispatch(loggedIn(true));
            localStorage.setItem("isLoggedIn", "true");
            dispatch(setCurrentUser(res));
          }
        })
        .catch((err) => err.json().then((err) => console.log(err)));
    };
    tokenCheck();

    const getMoviesData = () => {
      dispatch(setLoader(true));
      Promise.all([moviesApi.getMovies(), apiSavedMovies.getSavedMovies()])
        .then(([moviesDB, savedMovies]) => {
          localStorage.setItem("moviesData", JSON.stringify(moviesDB));
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies.data));
          dispatch(setSavedMovies(savedMovies.data));
          dispatch(setMoviesData(moviesDB));
        })
        .catch((err) => {
          handleInfoTooltip(true, ERR_DEFAULT_MESSAGE);
          console.log(err);
        })
        .finally(() => dispatch(setLoader(false)));
    };
    getMoviesData();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile onInfoTooltip={handleInfoTooltip} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies onInfoTooltip={handleInfoTooltip} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute>
              <SavedMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-up"
          element={isLoggedIn ? <Navigate to="/movies" /> : <Register onInfoTooltip={handleInfoTooltip} onLogin={handleLogin} />}
        />
        <Route path="/sign-in" element={isLoggedIn ? <Navigate to="/movies" /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <InfoTooltip isConfirm={isConfirmInfoTooltip} isOpen={isOpenInfoTooltip} onClose={handleClosePopup} message={messageInfoTooltip} />
    </>
  );
}

export default App;
