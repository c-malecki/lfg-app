import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  PostsDispatchContext,
  UsersState,
} from "../../../contexts/context_index";
import { reformatDate } from "../../../assets/util/reformatDate";
import { GeneralButton } from "../../components_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const CommentForm = (props) => {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    openForm: false,
  });
  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(PostsDispatchContext);

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
            dispatch({
              type: "ADD_COMMENT",
              post_id: props.post_id,
              comment: {
                user_name: currentUser.account.user_name,
                date: date,
                content: values.content,
                comment_id: commentId,
              },
            });
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
