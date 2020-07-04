import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { GeneralButton } from "../../components_index";
import { MessagesDispatch, UsersState } from "../../../contexts/context_index";
import { reformatDate } from "../../../assets/util/reformatDate";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const SendMessageForm = (props) => {
  const dispatch = useContext(MessagesDispatch);
  const { currentUser } = useContext(UsersState);
  const history = useHistory();

  const MessageSchema = Yup.object().shape({
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="SendMessageForm-container">
      <div className="SendMessageForm-user-container">
        <span>To: {props.toUser} (turn into input with user search?)</span>
      </div>
      <Formik
        initialValues={{
          subject: "",
          message: "",
        }}
        validationSchema={MessageSchema}
        onSubmit={(values) => {
          const date = reformatDate(new Date());
          const messageId = uuidv4();
          dispatch({
            type: "SEND_RECEIVE_MESSAGE",
            message: {
              from_username: currentUser.user_name,
              to_username: props.toUser,
              date_sent: date,
              subject: values.subject,
              content: values.message,
              message_id: messageId,
              replies: [],
            },
          });
          history.push(`/messages/${messageId}`);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form>
            <div className="SendMessageForm-content">
              <Field
                name="subject"
                placeholder="subject"
                className="form-text"
              />
              {errors.subject ? <div>{errors.subject}</div> : null}
              <Field
                name="message"
                as="textarea"
                placeholder="message..."
                className="form-textarea"
              />
              {errors.message ? <div>{errors.message}</div> : null}
              <span>
                <GeneralButton
                  type="submit"
                  addClass="general-theme-button"
                  text="send"
                />
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
