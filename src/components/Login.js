import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducers/rootReducers";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1021px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
