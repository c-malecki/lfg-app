import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppDispatchContext, UsersContext } from "../../contexts/context_index";
import { GeneralButton } from "../components_index";

export const LogInForm = () => {
  const [formState, setFormState] = useState({
    user_name: "",
    password: "",
    error: null,
  });

  const { allUsers } = useContext(UsersContext);
  const dispatch = useContext(AppDispatchContext);
  const history = useHistory();

  const resetForm = () => {
    setFormState({
      user_name: "",
      password: "",
      error: null,
    });
  };

  const validate = (data) => {
    const check = allUsers.find(
      (user) =>
        user.account.user_name.toLowerCase() === data.user_name.toLowerCase() &&
        user.account.password === data.password
    );
    if (check === undefined || check === null) {
      setFormState((prevState) => ({
        ...prevState,
        error: "Username or password is incorrect.",
      }));
    } else if (check !== undefined || check !== null) {
      dispatch({ type: "LOGIN", userData: check });
      resetForm();
      history.push("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_name: formState.user_name,
      password: formState.password,
    };
    validate(data);
  };
  return (
    <div className="LogInForm-container">
      <form className="LogInForm-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="LogInForm-username-container">
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, user_name: e.target.value })
            }
            name="user_name"
            placeholder="username"
            value={formState.user_name}
          />
        </div>
        <div className="LogInForm-password-container">
          <input
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
            name="password"
            className="LogInForm-password-input"
            type="text"
            placeholder="password"
            value={formState.password}
          />
        </div>
        <div className="LogInForm-submit-container">
          <GeneralButton
            type="submit"
            addClass="general-theme-button"
            text="log in"
          />
        </div>
        {formState.error ? (
          <div className="LogInForm-error">{formState.error}</div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
