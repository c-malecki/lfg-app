import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

export const ReplyToMessageForm = (props) => {
  const [formState, setFormState] = useState({
    openForm: false,
    isSubmitting: false,
  });
  const { username, message_id } = props;

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
        addClass={formState.openForm ? "hide" : "general-theme-button"}
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
              `http://localhost:5000/api/v1/messages/${message_id}/replies`,
              newReply
            )
              .then((res) => console.log(res.data))
              .catch((error) => console.log(error.message));
            resetForm();
          }}
          validationSchema={ReplySchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors }) => (
            <Form>
              <Field name="message" as="textarea" className="form-textarea" />
              {errors.message ? <div>{errors.message}</div> : null}
              <div className="ReplyToMessage-submit-container">
                <GeneralButton
                  type="submit"
                  addClass="general-theme-button"
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
