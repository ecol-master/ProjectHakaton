import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";

import UserLogo from "../images/image.png";

import "./SignUp.scss";
import { useEffect } from "react";

const SignUp = () => {
  const userName = useInput();
  const email = useInput();
  const password = useInput();
  const passwordRepeat = useInput();
  const navigate = useNavigate();

  const [error, setError] = useState({ message: null, status_code: 0 });

  const getErrorFromData = (data) => {
    const dataKeys = Object.keys(data);
    if (dataKeys.includes("email")) {
      return { message: "Enter a valid email address.", status_code: 400 };
    } else if (dataKeys.includes("username")) {
      return {
        message: data.username[0],
        status_code: 400,
      };
    }
    if (data.error == false) {
      localStorage.setItem("user_id", data.data.id);
      localStorage.setItem("user_name", data.data.username);
      localStorage.setItem("user_email", data.data.email);
      localStorage.setItem("is_authorization", true);
      localStorage.setItem("is_expert", data.data.is_expert)
    }
    return { message: data.message, status_code: data.status_code };
  };

  useEffect(() => {
    if (error.status_code === 200) {
      navigate("/");
    }
  });

  const onClickSubmit = () => {
    const isValuesNotEmpty = () => {
      let isEmpty = false;

      [userName.value, email.value, password.value, passwordRepeat.value].map(
        (value) => {
          if (value.trim() == "") {
            isEmpty = true;
          }
        }
      );
      return isEmpty;
    };

    if (!isValuesNotEmpty()) {
      if (password.value !== passwordRepeat.value) {
        setError({ message: "Passwords do not match", status_code: 400 });
      } else if (password.value.length < 6) {
        setError({
          message: "Ensure this field has at least 6 characters.",
          status_code: 400,
        });
      } else {
        const signUpUrlAPI = "http://127.0.0.1:8000/api/v1/registration/";
        const data = {
          username: userName.value,
          email: email.value,
          password: password.value,
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
            setError(getErrorFromData(data));
          });
      }
    } else {
      setError({
        message: "Check if the fields are filled in correctly",
        status_code: 400,
      });
    }
  };

  const renderMessageBox = () => {
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

    return (
      <div className={`error__box ${classNameBox}`}>
        <h3 className="error__box_message">
          {error.status_code == 0 ? "" : error.message}
        </h3>
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
