import { AuthContext } from "@/context/UserContext";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Alert, Snackbar, Box, Typography } from "@mui/material";
import { FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CartContext } from "@/context/CartContext";
import { BASE_API_URL } from "../../utils/variables";

const Login = () => {
  const history = useRouter();
  const { setUser, isSignIn, setIsSignIn, message, setMessage }: any =
    useContext(AuthContext);

  const [email, setEmail] = useState("sunny@gmail.com");
  const [password, setPassword] = useState("sunny12345");
  const [username, setUserName] = useState();
  const [phone_number, setPhoneNumber] = useState();
  const [alert, setAlert] = useState(false);
  const [status, setStatus] = useState(false);
  // const [forgetPass, setForgetPass] = useState(false);

  const handleClick = async (e: any) => {
    try {
      e.preventDefault();
      const res = await axios.post("BASE_API_URL/auth/login", {
        email,
        password,
      });
      console.log("firstUser", res.data.user.user);
      setUser(res.data.user.user);
      localStorage.setItem("user", JSON.stringify(res.data.user.user));
      setMessage(res.data.message);
      console.log(res.data.message);
      setAlert(true);
      setStatus(true);
      history.push("/");

      // navigate('/dashboard', { replace: true });
    } catch (error: any) {
      console.log(error);
      // setMessage(error)
      setStatus(false);
      setAlert(true);
    }
  };

  const signup = async (e: any) => {
    try {
      e.preventDefault();
      const res = await axios.post(`BASE_API_URL/users/register`, {
        email,
        password,
        username,
        phone_number,
      });
      // console.log(res);
      // setMessage(res.data.message)
      console.log(res);
      setAlert(true);
      setStatus(true);
      setIsSignIn(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <Snackbar
        open={alert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => {
          setAlert(false);
        }}
      >
        <Alert severity={status ? "success" : "error"}>{message}</Alert>
      </Snackbar>

      <div className={`container ${isSignIn ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
              {/* <button >Log in</button> */}
              <input
                type="button"
                value="Login"
                className="btn solid"
                onClick={handleClick}
              />
              <a href="#forgetPass">Forget passwort?</a>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </form>

            <form className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e: any) => setUserName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="phone number"
                  placeholder="phone number"
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                />
              </div>
              <input
                type="button"
                className="btn"
                value="Sign up"
                onClick={signup}
              />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  console.log("Clicked SUP");
                  setIsSignIn(true);
                }}
              >
                Sign up
              </button>
            </div>
            {/* <img src="img/log.svg" className="image" alt="" /> */}
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  console.log("Clicked SIN");
                  setIsSignIn(false);
                }}
              >
                Sign in
              </button>
            </div>
            {/* <img src="img/register.svg" className="image" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
