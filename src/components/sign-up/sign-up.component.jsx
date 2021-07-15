import React, { useState, useEffect } from "react";

import "./sign-up.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SignUpSuccess from "../signUpSuccess/signUpSuccess.components";

import { useRestApi } from "../../context/restApiContext";

const SignUp = ({ history }) => {
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  //const {auth,createUserProfileDocument} = useFirebase();
  const { user, setUser, signupUser } = useRestApi();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "email"
      ? setEmail(value)
      : name === "password"
      ? setPassword(value)
      : name === "displayName"
      ? setDisplayName(value)
      : setConfirmPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      //await createUserProfileDocument(user,{displayName})
      const returnedUser = await signupUser(displayName, email, password);
      //setUser({ ...returnedUser});
      history.replace("/signUpSuccess");
      //clear form
      setEmail("");
      setPassword("");
      setDisplayName("");
      setConfirmPassword("");
    } catch (error) {
      //const errormessage = error.message;
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="ConfirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        ></FormInput>

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
