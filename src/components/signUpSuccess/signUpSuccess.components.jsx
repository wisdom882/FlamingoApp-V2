import React from "react";
import { Link } from "react-router-dom";

import "./signUpSuccess.styles.css";

const SignUpSuccess = () => (
  <div className="container signupsuccess">
    <div className="app-wrapper">
      <h1>Account created!</h1>
      <Link to="/login">Click here to sign in</Link>
    </div>
  </div>
);

export default SignUpSuccess;
