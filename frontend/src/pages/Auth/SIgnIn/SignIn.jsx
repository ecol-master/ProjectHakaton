import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

import UserLogo from "../images/image.png";

import "../Styles.scss";
import "./SignIn.scss";

const SignIn = () => {
  const inputEmail = useInput();
  const inputPassword = useInput();

  const [signInResponse, setSignInResponse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (signInResponse) {
      if (signInResponse.status_code == 200) {
        navigate("/");
      }
    }
  }, [signInResponse]);

  const onClickSubmit = () => {
    const requestData = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    

    setSignInResponse({ status_code: 200 });

    // console.log(inputEmail.value, inputPassword.value);
  };

  const renderMessageBox = () => {
    return (
      <div>
        <h3 className="sign_up__error_box"></h3>
      </div>
    );
  };

  return (
    <>
      <div className="wrapper_auth">
        <div className="auth_container sign-in">
          <div className="sign_in__header">
            <img src={UserLogo} className="user__logo"></img>
            <h2>Log In Your Account</h2>
          </div>

          <div className="sign_in__inputs">
            <input {...inputEmail} type="email" placeholder="Email"></input>
            <input
              {...inputPassword}
              type="password"
              placeholder="Password"
            ></input>
            <input
              onClick={onClickSubmit}
              type="submit"
              value="Sign In"
            ></input>
          </div>

          <div className="sign_in__information">
            <Link to="/sign-up" className="forgot__link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
