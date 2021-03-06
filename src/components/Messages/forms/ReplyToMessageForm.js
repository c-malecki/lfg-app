import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useSelector } from "react-redux";

export const ReplyToMessageForm = (props) => {
  const [formState, setFormState] = useState({
    openForm: false,
    isSubmitting: false,
  });
  const { username, message_id, addNewReply } = props;
  const { isDarkTheme } = useSelector((state) => state.appReducer);

  const toggleForm = () => {
    const { openForm } = formState;
    setFormState((prevState) => ({ ...prevState, openForm: !openForm }));
  };

  const submitDebounce = () => {
    setTimeout(function () {
      setFormState((prevState) => ({ ...prevState, isSubmitting: false }));
    }, 2000);
  };

  const ReplySchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="ReplyToMessage-container">
      <GeneralButton
        method={toggleForm}
        text="reply"
        addClass={
          formState.openForm
            ? "hide"
            : `${isDarkTheme ? "ui-button-dark" : "ui-button-light"}`
        }
      />
      <div
        className={`ReplyToMessage-inner-container ${
          formState.openForm ? "" : "hide"
        }`}
      >
        <Formik
          initialValues={{
            message: "",
          }}
          onSubmit={(values, { resetForm }) => {
            submitDebounce();
            const date = reformatDate(new Date());
            const replyId = uuidv4();
            const newReply = {
              username: username,
              date_sent: date,
              message: values.message,
              reply_id: replyId,
            };
            Axios.post(
              `${process.env.REACT_APP_API_URL}/messages/${message_id}/replies`,
              newReply
            )
              .then((res) => {
                console.log(res.data);
                addNewReply(newReply);
              })
              .catch((error) => console.log(error.message));
            resetForm();
          }}
          validationSchema={ReplySchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors }) => (
            <Form>
              <Field
                name="message"
                as="textarea"
                className={`${
                  isDarkTheme ? "textarea-dark" : "textarea-light"
                }`}
              />
              {errors.message ? <div>{errors.message}</div> : null}
              <div className="ReplyToMessage-submit-container">
                <GeneralButton
                  type="submit"
                  addClass={`${
                    isDarkTheme ? "ui-button-dark" : "ui-button-light"
                  }`}
                  text="send"
                  disabled={formState.isSubmitting}
                />

                <GeneralButton
                  method={toggleForm}
                  text="close"
                  addClass="close-delete-button"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
