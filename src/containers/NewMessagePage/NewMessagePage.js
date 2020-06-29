import React from "react";
import { useParams } from "react-router-dom";
import { SendMessageForm } from "../../components/components_index";

export const NewMessagePage = (props) => {
  const { user } = useParams();
  return (
    <div className="NewMessagePage-container">
      <SendMessageForm toUser={user} />
    </div>
  );
};
