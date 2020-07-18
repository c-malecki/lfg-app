import React from "react";
import {
  PageLoader,
  Error,
  NoContent,
} from "../../components/components_index";
export const utilPageContent = (pageStatus, content, noContentMessage) => {
  const { isLoading, error, pageData } = pageStatus;
  if (isLoading) {
    return <PageLoader />;
  } else if (error) {
    return <Error errorMessage={error} />;
  } else if (pageData.length < 1) {
    return <NoContent noContentMessage={noContentMessage} />;
  } else {
    return content();
  }
};
