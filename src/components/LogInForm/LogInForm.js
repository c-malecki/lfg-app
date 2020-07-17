import React from "react";
import { GeneralButton } from "../components_index";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { fetchUserForLogin } from "../../redux/actions/user-actions";
import { useSelector } from "react-redux";

export const LogInForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userReducer);
  const { isDarkTheme } = useSelector((state) => state.appReducer);
  return (
    <div className="LogInForm-container">
      <Formik
        initialValues={{
          user_name: "",
          password: "",
        }}
        onSubmit={(values) => {
          dispatch(
            fetchUserForLogin({
              username: values.user_name,
              password: values.password,
            })
          );
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form>
            <div className="LogInForm-content">
              <Field
                name="user_name"
                placeholder="username"
                className={`${
                  isDarkTheme ? "textinput-dark" : "textinput-light"
                }`}
              />

              <Field
                name="password"
                placeholder="password"
                className={`${
                  isDarkTheme ? "textinput-dark" : "textinput-light"
                }`}
              />

              <span>
                <GeneralButton
                  type="submit"
                  addClass={`${
                    isDarkTheme ? "ui-button-dark" : "ui-button-light"
                  }`}
                  text="log in"
                />
              </span>
            </div>
          </Form>
        )}
      </Formik>
      {error ? <div>Username or password is incorrect.</div> : null}
    </div>
  );
};
