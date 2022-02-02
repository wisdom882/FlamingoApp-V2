import React, { useState } from "react";

import "./sign-in-and-sign-up.styles.css";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = ({ history }) => {
  return (
    <div className="auth-container">
      <div className="sign-in-and-sign-up">
        <SignIn history={history} />
      </div>
      <div className="sign-in-and-sign-up">
        <SignUp history={history} />
      </div>
    </div>
  );
};

export default SignInAndSignUpPage;
