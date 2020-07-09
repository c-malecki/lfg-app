import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UsersDispatch, UsersState } from "../../contexts/context_index";
import { GeneralButton } from "../components_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// redux
import { useDispatch } from "react-redux";
import { fetchUserForLogin } from "../../redux/actions/user-actions";

export const LogInForm = () => {
  const { allUsers } = useContext(UsersState);
  const dispatch = useContext(UsersDispatch);
  const reduxDispatch = useDispatch();
  const history = useHistory();

  const LoginSchema = Yup.object().shape({
    user_name: Yup.string()
      .required("Username is required.")
      .test("valid-username", "Username or password is incorrect.", (value) => {
        if (
          allUsers.find(
            (user) =>
              user.account.user_name.toLowerCase() === value.toLowerCase()
          )
        ) {
          return true;
        } else {
          return false;
        }
      }),
    password: Yup.string()
      .required("Password is required.")
      .test("valid-password", "Username or password is incorrect.", (value) => {
        if (
          allUsers.find(
            (user) =>
              user.account.password.toLowerCase() === value.toLowerCase()
          )
        ) {
          return true;
        } else {
          return false;
        }
      }),
  });

  return (
    <div className="LogInForm-container">
      <Formik
        initialValues={{
          user_name: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          dispatch({ type: "LOGIN", userData: values });
          reduxDispatch(
            fetchUserForLogin({
              username: values.user_name,
              password: values.password,
            })
          );
          history.push("/");
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
                className="form-text"
              />
              {errors.user_name ? <div>{errors.user_name}</div> : null}
              <Field
                name="password"
                placeholder="password"
                className="form-text"
              />
              {errors.password ? <div>{errors.password}</div> : null}
              <span>
                <GeneralButton
                  type="submit"
                  addClass="general-theme-button"
                  text="log in"
                />
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
