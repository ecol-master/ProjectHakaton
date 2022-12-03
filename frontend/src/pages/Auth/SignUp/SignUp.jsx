import React, { useState } from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";

import UserLogo from "../images/image.png";

import "./SignUp.scss";

const SignUp = () => {
  const userName = useInput();
  const email = useInput();
  const password = useInput();
  const passwordRepeat = useInput();

  const [error, setError] = useState("");

  const onClickSubmit = () => {
    const isValuesNotEmpty = () => {
      let isEmpty = false;

      [
        userName.value,
        jobPosition.value,
        email.value,
        password.value,
        passwordRepeat.value,
      ].map((value) => {
        if (value.trim() == "") {
          isEmpty = true;
        }
      });
      return isEmpty;
    };

    if (!isValuesNotEmpty()) {
      if (password.value !== passwordRepeat.value) {
        setError({ message: "Passwords do not match", status_code: 400 });
      } else {
        const signUpUrlAPI = "";
        const data = {
          username: userName.value,
          email: email.value,
          password: password.value,
        };

        fetch(signUpUrlAPI, {
          method: "POST",
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status_code == 200) {
              setError("Все верно");
            }else{
              
            }
          });
        setError({ message: "Everything is right", status_code: 200 });
      }
    } else {
      setError({
        message: "Check if the fields are filled in correctly",
        status_code: 400,
      });
    }
  };

  const renderMessageBox = () => {
    const classNameBox = error.status_code == 200 ? "success" : "failed";

    return (
      <div className={`error__box ${classNameBox}`}>
        <h3 className="error__box_message">{error.message}</h3>
      </div>
    );
  };

  return (
    <>
      <div className="wrapper_auth">
        <div className="auth_container sign_up">
          <div className="sign_up__header">
            <img src={UserLogo}></img>
            <h2>Create Your Account</h2>
          </div>

          <div className="sign_up__inputs">
            <input {...userName} type="text" placeholder="Your Name"></input>
            <input {...email} type="email" placeholder="Email"></input>
            <input {...password} type="password" placeholder="Password"></input>
            <input
              {...passwordRepeat}
              type="password"
              placeholder="Repeat your password"
            ></input>
            <input
              onClick={onClickSubmit}
              type="submit"
              value="Sign Up"
            ></input>
          </div>

          <div className="sign_up__information">
            {renderMessageBox()}
            <Link to="/sign-in" className="forgot__link">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
