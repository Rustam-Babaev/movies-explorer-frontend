import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PAGE__NOT__FOUND, BACK } from "../../utils/constants";

function PageNotFound() {
  const language = useSelector((state) => state.language.language);
  return (
    <main className="page-not-found ">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__subtitle">{PAGE__NOT__FOUND[language]}</p>
      <Link className="page-not-found__link" to="/">
        {BACK[language]}
      </Link>
    </main>
  );
}

export default PageNotFound;
