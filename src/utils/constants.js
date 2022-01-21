const REG_EMAIL = ".+@.+[.].+";
const REG_NAME = "[A-Za-zА-Яа-яЁё -]+$";

// const MESSAGE_AUTH_CONFIRM = "Вы успешно зарегистрировались!";
// const MESSAGE_AUTH_REJECT = "Что-то пошло не так! Попробуйте ещё раз.";
// const MESSAGE_CONFIRM_SAVE = "Данные успешно сохранились";
// const MESSAGE_NOT_FOUND = "Ничего не найдено";
// const MESSAGE_SEARCH_WORD = "Нужно ввести ключевое слово";
// const MESSAGE_FORMAT_SYMBOLS = "Допускается использовать только латиницу, кириллицу, пробел или дефис";

const ERR_DEFAULT_MESSAGE = {
  ru: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  en: "An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again",
};
const MESSAGE_AUTH_CONFIRM = { ru: "Вы успешно зарегистрировались!", en: "You have successfully registered!" };
const MESSAGE_AUTH_REJECT = { ru: "Что-то пошло не так! Попробуйте ещё раз.", en: "Something went wrong! Try again." };
const MESSAGE_CONFIRM_SAVE = { ru: "Данные успешно сохранились.", en: "The data was saved successfully." };
const MESSAGE_NOT_FOUND = { ru: "Ничего не найдено.", en: "Nothing found" };
const MESSAGE_SEARCH_WORD = { ru: "Нужно ввести ключевое слово.", en: "You need to enter a keyword." };
const MESSAGE_FORMAT_SYMBOLS = {
  ru: "Допускается использовать только латиницу, кириллицу, пробел или дефис.",
  en: "It is allowed to use only Latin, Cyrillic, space or hyphen.",
};

const PROMO_TITLE = {
  ru: "Учебный проект студента факультета Веб-разработки.",
  en: "Educational project of a student of the Faculty of Web Development.",
};
const ABOUT_PROJECT_TITLE = { ru: "О проекте", en: "About the project" };
const ABOUT_PROJECT_TITLE_DURATION = [
  { ru: "Дипломный проект включал 5 этапов", en: "The diploma project included 5 stages" },
  { ru: "На выполнение диплома ушло 5 недель", en: "It took 5 weeks to complete the thesis" },
];
const ABOUT_PROJECT_PARAGRAPH_DURATION = [
  {
    ru: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
    en: "Drawing up a plan, working on the backend, layout, adding functionality and final improvements.",
  },
  {
    ru: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
    en: "Each stage had a soft and hard deadline that had to be met in order to successfully defend.",
  },
];
const TECHS__TITLE = { ru: "Технологии", en: "Technologies" };
const TECHS__SUBTITLE = { ru: "7 технологий", en: "7 technologies" };
const TECHS__PARAGRAPH = {
  ru: "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.",
  en: "On the web development course, we mastered the technologies that we used in the graduation project.",
};
const ABOUTME__TITLE = { ru: "Студент", en: "Student" };
const NAME__SURNAME = { ru: "Рустам Бабаев", en: "Rustam Babaev" };
const ABOUTME__PROFFESION = { ru: "Фронтенд-разработчик, 29 лет", en: "Front-end developer, 29 years old" };
const ABOUTME__DESCRIPTION = {
  ru: "Я вырос в городе Перми. Закончил ПГГПУ по специальности информационные системы и технологии. Последние 5 лет работал в сфере туризма, сейчас поставил себе задачу войти в сферу IT, так как с детства увлекаюсь технологиями и хочу быть частью этого сообщества. Последние 10 месяцев прохожу обучение в яндекс.Практикуме.",
  en: "I am a Junior frontend developer from Russia who is moving to Germany.After finishing university with a degree in information systems andtechnologies, I changed my field of work. However, I felt interest andpassion for programming and have decided to continue my career in IT. Ialways take my work seriously and approach tasks with professionalism andattention to detail. I like to work in a team and maintain good relations withcolleagues. I am positive and open to new opportunities.",
};
const PORTFOLIO__TITLE = { ru: "Портфолио", en: "Portfolio" };
const PORTFOLIO__PROJECTS = [
  { ru: "Статичный сайт", en: "Static website" },
  { ru: "Адаптивный сайт", en: "Responsive website" },
  { ru: "Одностраничное приложение", en: "Single Page Application" },
];
const FOOTER__TITLE = { ru: "Учебный проект Яндекс.Практикум х BeatFilm.", en: "Educational project Y.Practicum х BeatFilm." };

const REGISTRATION = { ru: "Регистрация", en: "Registration" };
const LOGIN = { ru: "Войти", en: "Sign-in" };
const NAME = { ru: "Имя", en: "Name" };
const PASSWORD = { ru: "Пароль", en: "Password" };
const REGISTRATION__WELCOME__MESSAGE = { ru: "Добро пожаловать!", en: "Welcome!" };
const REGISTRATION__BUTTON = { ru: "Зарегистрироваться", en: "Register" };
const REGISTRATION__QUESTION = { ru: "Уже зарегистрированы?", en: "Already registered?" };
const LOGIN__WELCOME__MESSAGE = { ru: "Рады видеть!", en: "We're glad to see you!" };
const LOGIN__QUESTION = { ru: " Ещё не зарегистрированы?", en: "Not registered yet?" };

const HOME = { ru: "Главаная", en: "Home" };
const MOVIES = { ru: "Фильмы", en: "Movies" };
const MY__MOVIES = { ru: "Сохраненные фильмы", en: "My movies" };
const ACCOUNT = { ru: "Аккаунт", en: "Account" };
const SHORT__MOVIE = { ru: "Короткометражки", en: "Short movie" };
const SEARCH = { ru: "Поиск", en: "Search" };

const NOTHING__FOUND = { ru: "Ничего не найдено", en: "Nothing found" };
const MORE = { ru: "Еще", en: "More" };
const PROFILE__HELLO = { ru: "Привет", en: "Hi" };
const EDIT = { ru: "Редактировать", en: "Edit" };
const SIGN__OUT = { ru: "Выйти из аккаунта", en: "Sign-out" };

const PAGE__NOT__FOUND = { ru: "Страница не найдена", en: "Page not found" };
const BACK = { ru: "Назад", en: "Back" };

export {
  REG_EMAIL,
  REG_NAME,
  ERR_DEFAULT_MESSAGE,
  MESSAGE_AUTH_CONFIRM,
  MESSAGE_AUTH_REJECT,
  MESSAGE_CONFIRM_SAVE,
  MESSAGE_NOT_FOUND,
  MESSAGE_SEARCH_WORD,
  MESSAGE_FORMAT_SYMBOLS,
  PROMO_TITLE,
  ABOUT_PROJECT_TITLE,
  ABOUT_PROJECT_TITLE_DURATION,
  ABOUT_PROJECT_PARAGRAPH_DURATION,
  TECHS__TITLE,
  TECHS__SUBTITLE,
  TECHS__PARAGRAPH,
  PORTFOLIO__TITLE,
  ABOUTME__TITLE,
  NAME__SURNAME,
  ABOUTME__PROFFESION,
  ABOUTME__DESCRIPTION,
  PORTFOLIO__PROJECTS,
  FOOTER__TITLE,
  REGISTRATION,
  LOGIN,
  REGISTRATION__WELCOME__MESSAGE,
  NAME,
  PASSWORD,
  REGISTRATION__BUTTON,
  REGISTRATION__QUESTION,
  LOGIN__WELCOME__MESSAGE,
  LOGIN__QUESTION,
  HOME,
  MOVIES,
  MY__MOVIES,
  ACCOUNT,
  SHORT__MOVIE,
  SEARCH,
  NOTHING__FOUND,
  MORE,
  PROFILE__HELLO,
  EDIT,
  SIGN__OUT,
  PAGE__NOT__FOUND,
  BACK,
};
