import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, PostPage } from "../index";
import styles from "./PageContent.module.scss";

export const PageContent = (props) => {
  return (
    <div className={styles.PageContent}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post" component={PostPage} />
      </Switch>
    </div>
  );
};
