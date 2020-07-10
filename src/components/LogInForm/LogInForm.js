import React from "react";
import { useHistory } from "react-router-dom";
import { GeneralButton } from "../components_index";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchUserForLogin } from "../../redux/actions/user-actions";

export const LogInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

              <Field
                name="password"
                placeholder="password"
                className="form-text"
              />

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
