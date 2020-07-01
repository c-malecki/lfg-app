import React from "react";
import { useParams } from "react-router-dom";
import { SendMessageForm } from "../../components/components_index";

export const NewMessagePage = (props) => {
  const { user } = useParams();
  return (
    <div className="NewMessagePage-container">
      <div className="NewMessagePage-content">
        <SendMessageForm toUser={user} />
      </div>
    </div>
  );
};
