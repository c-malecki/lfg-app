import React from "react";
import { LogInForm, LfgMiniBanner } from "../../components/components_index";

export const LogInPage = () => {
  return (
    <div className="LogInPage-content">
      <div className="LogIn">
        <LfgMiniBanner />
        <LogInForm />
      </div>
    </div>
  );
};
