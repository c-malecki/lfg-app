import React from "react";
import { NoContent } from "../../components/components_index";

export const utilComponentContent = (data, content, noContentMessage) => {
  if (data && data.length < 1) {
    return <NoContent noContentMessage={noContentMessage} />;
  } else {
    return content();
  }
};
