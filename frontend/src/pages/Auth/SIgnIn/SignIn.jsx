import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";

import UserLogo from "../images/image.png";

import "../Styles.scss";
import "./SignIn.scss";

const SignIn = () => {
  const inputEmail = useInput();
  const inputPassword = useInput();

  const [error, setError] = useState({ message: null, status_code: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (error.status_code == 200) {
      navigate("/");
    }
  }, [error]);

  const getErrorFromData = (data) => {
    const dataKeys = Object.keys(data);
    console.log(data, dataKeys);
  };

  const onClickSubmit = () => {
    const isValuesNotEmpty = () => {
      let isEmpty = false;

      [inputEmail.value, inputPassword.value].map((value) => {
        if (value.trim() == "") {
          isEmpty = true;
        }
      });
      return isEmpty;
    };

    if (!isValuesNotEmpty()) {
      const signUpUrlAPI = "http://127.0.0.1:8000/api/v1/authorization/";
      const data = {
        email: inputEmail.value,
        password: inputPassword.value
      };

      fetch(signUpUrlAPI, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          getErrorFromData(data);
        });
    } else {
      let classNameBox = "";
      switch (error.status_code) {
        case 200:
          classNameBox = "success";
          break;
        case 400:
          classNameBox = "failed";
          break;
        case 0:
          classNameBox = "hidden";
          break;
      }

      setError({
        message: "Check if the fields are filled in correctly",
        status_code: 400,
      });
    }
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
            {renderMessageBox()}
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
