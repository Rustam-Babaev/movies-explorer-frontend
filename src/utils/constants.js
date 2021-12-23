const REG_EMAIL = ".+@.+[.].+";
const REG_NAME = "[A-Za-zА-Яа-яЁё -]+$";
const ERR_DEFAULT_MESSAGE =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
const MESSAGE_AUTH_CONFIRM = "Вы успешно зарегистрировались!";
const MESSAGE_AUTH_REJECT = "Что-то пошло не так! Попробуйте ещё раз.";
const MESSAGE_CONFIRM_SAVE = "Данные успешно сохранились";
const MESSAGE_NOT_FOUND = "Ничего не найдено";
const MESSAGE_SEARCH_WORD = "Нужно ввести ключевое слово";
const MESSAGE_FORMAT_SYMBOLS = "Допускается использовать только латиницу, кириллицу, пробел или дефис";

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
};
