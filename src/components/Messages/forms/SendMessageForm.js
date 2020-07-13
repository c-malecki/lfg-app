import React from "react";
import { v4 as uuidv4 } from "uuid";
import { GeneralButton } from "../../components_index";
import { reformatDate } from "../../../assets/util/reformatDate";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import Select from "react-select";

export const SendMessageForm = (props) => {
  const MessageSchema = Yup.object().shape({
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    toUser: Yup.string().required("You much select a recipient."),
  });
  const { from, to, setMessageStatus, userList } = props;
  const userOptions = userList
    .map((u) => {
      return { value: u.username, label: u.username };
    })
    .filter((obj) => obj.value !== from.username);
  return (
    <div className="SendMessageForm-container">
      <Formik
        initialValues={{
          toUser: to,
          subject: "",
          message: "",
        }}
        validationSchema={MessageSchema}
        onSubmit={(values) => {
          const date = reformatDate(new Date());
          const messageId = uuidv4();
          const sendTo = userList.find(
            (u) => u.username.toLowerCase() === values.toUser.toLowerCase()
          );
          const newMessage = {
            message_thread_id: messageId,
            message_subject: values.subject,
            date_started: date,
            original_sender: {
              username: from.username,
              user_id: from.user_id,
            },
            original_receiver: {
              ...sendTo,
            },
            original_content: values.message,
            replies: [],
          };
          Axios.post("http://localhost:5000/api/v1/messages", newMessage)
            .then((res) => {
              setMessageStatus({
                success: true,
                error: null,
                message_id: messageId,
              });
            })
            .catch((error) =>
              setMessageStatus({
                success: false,
                error: error.message,
                message_id: null,
              })
            );
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, values, setFieldValue }) => (
          <Form>
            <div className="SendMessageForm-content">
              <Select
                placeholder="Send message to..."
                options={userOptions}
                isSearchable={true}
                name="toUser"
                value={userOptions.find((o) => o.label === values.toUser)}
                noOptionsMessage={() => "No users match the search."}
                onChange={(selectedOption) => {
                  setFieldValue("toUser", selectedOption.value);
                }}
              />
              {errors.toUser ? <div>{errors.toUser}</div> : null}
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
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
