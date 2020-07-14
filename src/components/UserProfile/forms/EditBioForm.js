import React from "react";
import { GeneralButton } from "../../components_index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

export const EditBioForm = (props) => {
  const { username, bio } = props;
  const BioSchema = Yup.object().shape({
    bio: Yup.string().max(300, "Bio cannot be more than 300 characters."),
  });
  return (
    <div className="EditBioForm-container">
      <Formik
        initialValues={{
          bio: bio,
        }}
        validationSchema={BioSchema}
        onSubmit={(values) => {
          const newBio = {
            bio: values.bio,
          };
          Axios.post(
            `${process.env.REACT_APP_API_URL}/users/${username}/profile/bio`,
            newBio
          )
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error.message));
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
