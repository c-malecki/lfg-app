import React from "react";
import { v4 as uuidv4 } from "uuid";
import { reformatDate } from "../../../../assets/util/reformatDate";
import { GeneralButton, GeneralLink } from "../../../components_index";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import Axios from "axios";

export const NewPostForm = (props) => {
  const { post_author, post_tags, group, setPostStatus } = props;

  const NewPostSchema = Yup.object().shape({
    title: Yup.string()
      .max(100, "Post title cannot be more than 100 characters.")
      .required("Post title is required."),
    content: Yup.string().required("Post content is required."),
  });

  return (
    <div className="PostForm-container">
      <h2>
        New Post in{" "}
        <GeneralLink url={`/g/${group}/posts`} text={`g/${group}`} />
      </h2>
      <Formik
        initialValues={{
          title: "",
          content: "",
          tags: [],
          tag_search: "",
          filtered_tags: post_tags,
          all_tags: post_tags,
        }}
        validationSchema={NewPostSchema}
        onSubmit={(values) => {
          const date = reformatDate(new Date());
          const postId = uuidv4();
          const newPost = {
            post_id: postId,
            post_author: post_author,
            date_posted: date,
            post_title: values.title,
            post_tags: values.tags,
            posted_in: group,
            post_content: values.content,
            comments: [],
          };
          Axios.post("http://localhost:5000/api/v1/posts", newPost)
            .then((res) => {
              setPostStatus({
                success: true,
                error: null,
                post_id: postId,
              });
            })
            .catch((error) =>
              setPostStatus({
                success: false,
                error: error.message,
                post_id: null,
              })
            );
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, errors, handleChange, setFieldValue }) => (
          <Form>
            <div className="PostForm-content">
              <Field
                name="title"
                className="form-text"
                placeholder="Title the post..."
                id="PostForm-title"
              />
              {errors.title ? <div>{errors.title}</div> : null}
              <Field
                name="tag_search"
                className="form-text"
                placeholder="Search for or add tags..."
                id="PostForm-tag-search"
                onChange={(e) => {
                  handleChange(e);
                  setFieldValue(
                    "filtered_tags",
                    values.all_tags.filter((tag) => {
                      return tag
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase());
                    })
                  );
                }}
              />
              <FieldArray
                name="tags"
                render={(arrayHelpers) => (
                  <ul className="filtered-tags-list">
                    {values.tag_search === "" ? null : (
                      <li>
                        <span>{values.tag_search}</span>
                        <GeneralButton
                          addClass="form-add-button"
                          text="+"
                          method={() => {
                            setFieldValue("tags", [
                              ...values.tags,
                              values.tag_search,
                            ]);
                            setFieldValue("tag_search", "");
                            setFieldValue("filtered_tags", [...post_tags]);
                          }}
                        >
                          +
                        </GeneralButton>
                      </li>
                    )}
                    {values.filtered_tags.length > 0
                      ? values.filtered_tags.map((t, i) => {
                          if (values.tags.includes(t)) {
                            return null;
                          } else {
                            return (
                              <li key={i}>
                                <span>{t}</span>

                                <GeneralButton
                                  text="+"
                                  addClass="form-add-button"
                                  method={() => arrayHelpers.insert(i, t)}
                                >
                                  +
                                </GeneralButton>
                              </li>
                            );
                          }
                        })
                      : null}
                  </ul>
                )}
              />
              <FieldArray
                name="tags"
                render={(arrayHelpers) => (
                  <ul className="added-tags-list">
                    {values.tags.length > 0 ? (
                      <div id="PostForm-tags-for-post">Tags for post</div>
                    ) : null}
                    {values.tags.length > 0
                      ? values.tags.map((t, i) => {
                          return (
                            <li key={i}>
                              <span>{t}</span>

                              <GeneralButton
                                text="-"
                                addClass="form-delete-button"
                                method={() => arrayHelpers.remove(t)}
                              >
                                -
                              </GeneralButton>
                            </li>
                          );
                        })
                      : null}
                  </ul>
                )}
              />

              <Field
                name="content"
                as="textarea"
                className="form-textarea"
                placeholder="Write a post..."
              />
              {errors.content ? <div>{errors.content}</div> : null}
              <span>
                <GeneralButton
                  type="submit"
                  addClass="general-theme-button"
                  text="post"
                />
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
