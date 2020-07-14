import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

export const CommentForm = (props) => {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    openForm: false,
  });
  const { currentUser, post_id } = props;

  const toggleForm = () => {
    const { openForm } = formState;
    setFormState((prevState) => ({ ...prevState, openForm: !openForm }));
  };

  const submitDebounce = () => {
    setTimeout(function () {
      setFormState((prevState) => ({ ...prevState, isSubmitting: false }));
    }, 2000);
  };

  const CommentSchema = Yup.object().shape({
    content: Yup.string().required("Comment content is required"),
  });

  return (
    <div className="CommentForm-container">
      <GeneralButton
        method={toggleForm}
        text="comment"
        addClass={formState.openForm ? "hide" : "general-theme-button"}
      />
      <div
        className={`CommentForm-inner-container ${
          formState.openForm ? "" : "hide"
        }`}
      >
        <Formik
          initialValues={{
            content: "",
          }}
          onSubmit={(values, { resetForm }) => {
            submitDebounce();
            const date = reformatDate(new Date());
            const commentId = uuidv4();
            const newComment = {
              date_posted: date,
              comment_id: commentId,
              username: currentUser.username,
              comment_content: values.content,
            };
            Axios.post(
              `http://localhost:5000/api/v1/posts/ids/${post_id}/comments`,
              newComment
            )
              .then((res) => console.log(res.data))
              .catch((error) => console.log(error));
            resetForm();
            toggleForm();
          }}
          validationSchema={CommentSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors }) => (
            <Form>
              <Field name="content" as="textarea" className="form-textarea" />
              {errors.content ? <div>{errors.content}</div> : null}
              <div className="CommentForm-submit-container">
                <GeneralButton
                  type="submit"
                  addClass="general-theme-button"
                  text="comment"
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
