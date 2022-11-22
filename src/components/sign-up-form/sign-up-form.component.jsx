import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";

import { SignUpFormContainer, SignUpButton } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Неверный пароль!");
      return;
    }

    try {
      dispatch(signUpStart(displayName, email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Невозможно создать нового пользователя, email уже используется");
      }
      console.log("user creation encountered an error", error);
    }
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpFormContainer>
      <h2>У вас нет учетной записи?</h2>
      <span>Пройдите регистрацию с помощью электронной почты и пароля</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Имя пользователя"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="E-mail"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Пароль"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Подтвердите пароль"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <SignUpButton type="submit">Регистрация</SignUpButton>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
