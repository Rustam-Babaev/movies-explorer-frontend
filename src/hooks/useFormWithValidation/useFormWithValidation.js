import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { MESSAGE_SEARCH_WORD, MESSAGE_FORMAT_SYMBOLS } from "../../utils/constants";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const language = useSelector((state) => state.language.language);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event, isProfile) => {
    if (isProfile) {
      return setValues({ name: currentUser.name, email: currentUser.email });
    }
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let validationMessage = target.validationMessage;
    if (target.validity.patternMismatch && name === "name") {
      validationMessage = MESSAGE_FORMAT_SYMBOLS[language];
    }
    if ((target.validity.tooShort || target.validity.valueMissing) && name === "movie") {
      validationMessage = MESSAGE_SEARCH_WORD[language];
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return [values, handleChange, errors, isValid, resetForm];
}
