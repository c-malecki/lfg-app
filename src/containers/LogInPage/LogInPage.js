import React from "react";
import { LogInForm, LfgMiniBanner } from "../../components/components_index";

export const LogInPage = () => {
  return (
    <div className="LogInPage-container">
      <div className="LogInPage-content">
        <LfgMiniBanner />
        <LogInForm />
      </div>
    </div>
  );
};
