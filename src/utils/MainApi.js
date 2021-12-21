class ApiAuth {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
    this.urlSignUp = this.baseUrl + "/signup";
    this.urlSignIn = this.baseUrl + "/signin";
    this.urlMyProfile = this.baseUrl + "/users/me";
  }

  _checkResults(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  register(email, password, name) {
    return fetch(this.urlSignUp, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    }).then(this._checkResults);
  }

  authorize(email, password) {
    return fetch(this.urlSignIn, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkResults);
  }

  editProfileRequest(name, email) {
    return fetch(this.urlMyProfile, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResults);
  }

  signout() {
    return fetch(this.urlMyProfile + "/signout", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(this._checkResults);
  }

  checkToken() {
    return fetch(this.urlMyProfile, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResults);
  }
}

class SavedMoviesApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.urlMovies = this.baseUrl + "/movies";
  }

  _checkResults(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getSavedMovies() {
    return fetch(this.urlMovies, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkResults);
  }

  addMoviesRequest(movie) {
    return fetch(this.urlMovies, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(movie),
    }).then(this._checkResults);
  }

  deleteMovieRequest(movieId) {
    return fetch(this.urlMovies + "/" + movieId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkResults);
  }
}

const apiAuth = new ApiAuth({
  baseUrl: "https://api.movies-explorer.r-b.nomoredomains.work",
});

const apiSavedMovies = new SavedMoviesApi({
  baseUrl: "https://api.movies-explorer.r-b.nomoredomains.work",
});

export { apiAuth, apiSavedMovies };
