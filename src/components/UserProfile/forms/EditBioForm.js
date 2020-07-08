import React, { useContext } from "react";
import { GeneralButton } from "../../components_index";
import { UsersDispatch } from "../../../contexts/context_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const EditBioForm = (props) => {
  const dispatch = useContext(UsersDispatch);
  const BioSchema = Yup.object().shape({
    bio: Yup.string().max(300, "Bio cannot be more than 300 characters."),
  });
  return (
    <div className="EditBioForm-container">
      <Formik
        initialValues={{
          bio: props.bio,
        }}
        validationSchema={BioSchema}
        onSubmit={(values) => {
          dispatch({
            type: "UPDATE_BIO",
            user_name: props.user_name,
            bio: values.bio,
          });
          props.toggleEditBio();
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form>
            <div className="EditBioForm-content">
              <Field as="textarea" name="bio" className="form-textarea" />
              {errors.bio ? (
                <div className="form-error">{errors.bio}</div>
              ) : null}

              <div className="EditBioForm-submit-container">
                <GeneralButton
                  type="submit"
                  addClass="general-theme-button"
                  text="save"
                />

                <GeneralButton
                  text="cancel"
                  addClass="close-delete-button"
                  method={props.toggleEditBio}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
