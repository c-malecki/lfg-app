import React from "react";
import { PageLoader } from "../../components/components_index";
export const utilPageContent = (pageStatus, content) => {
  const { isLoading, error } = pageStatus;
  if (isLoading) {
    return <PageLoader />;
  } else if (error) {
    return <div>Something went wrong.</div>;
  } else {
    return content();
  }
};
