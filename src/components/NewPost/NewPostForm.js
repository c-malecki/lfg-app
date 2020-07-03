import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UsersState, PostsStateContext } from "../../contexts/context_index";
import { PostsDispatchContext } from "../../contexts/context_index";
import { reformatDate } from "../../assets/util/reformatDate";
import { GeneralButton, GeneralLink } from "../components_index";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

export const NewPostForm = (props) => {
  const { tags } = useContext(PostsStateContext);
  const { currentUser } = useContext(UsersState);
  const dispatch = useContext(PostsDispatchContext);
  const history = useHistory();
  const { group } = useParams();

  const NewPostSchema = Yup.object().shape({
    title: Yup.string()
      .max(100, "Post title cannot be more than 100 characters.")
      .required("Post title is required."),
    content: Yup.string().required("Post content is required."),
  });

  return (
    <div className="PostForm-container">
      <h2>
        New Post in <GeneralLink url={`/g/${group}`} text={`g/${group}`} />
      </h2>
      <Formik
        initialValues={{
          title: "",
          content: "",
          tags: [],
          tag_search: "",
          filtered_tags: tags,
          all_tags: tags,
        }}
        validationSchema={NewPostSchema}
        onSubmit={(values) => {
          const date = reformatDate(new Date());
          const postId = uuidv4();
          dispatch({
            type: "CREATE_POST",
            post: {
              author: currentUser.account.user_name,
              date: date,
              title: values.title,
              content: values.message,
              tags: values.tags,
              group: group,
              post_id: postId,
              comments: [],
            },
          });
          history.push(`/g/${group}/posts/${postId}`);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, errors, handleChange, setFieldValue }) => (
          <Form>
            <div className="PostForm-content">
              <Field name="title" placeholder="Title the post..." />
              {errors.title ? <div>{errors.title}</div> : null}
              <Field
                name="tag_search"
                placeholder="Search for or add tags..."
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
                  <ul>
                    <li>
                      <span>{values.tag_search}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setFieldValue("tags", [
                            ...values.tags,
                            values.tag_search,
                          ]);
                          setFieldValue("tag_search", "");
                          setFieldValue("filtered_tags", [...tags]);
                        }}
                      >
                        +
                      </button>
                    </li>
                    {values.filtered_tags.length > 0
                      ? values.filtered_tags.map((t, i) => {
                          if (values.tags.includes(t)) {
                            return null;
                          } else {
                            return (
                              <li key={i}>
                                <span>{t}</span>

                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(i, t)}
                                >
                                  +
                                </button>
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
                  <ul>
                    {values.tags.length > 0
                      ? values.tags.map((t, i) => {
                          return (
                            <li key={i}>
                              <span>{t}</span>

                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(t)}
                              >
                                -
                              </button>
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
