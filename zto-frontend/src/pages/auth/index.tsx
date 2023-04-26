import { AuthContext } from "@/context/UserContext";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Alert, Snackbar, Box, Typography } from "@mui/material";

const Login = () => {
  const history = useRouter();
  const { setUser, isSignIn, setIsSignIn, message, setMessage } =
    useContext(AuthContext);
  console.log("signin", isSignIn);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();
  const [phone_number, setPhoneNumber] = useState();
  const [alert, setAlert] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClick = async (e: any) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "https://zto-server.onrender.com/auth/login",
        { email, password }
      );
      console.log(res);
      setUser(res.data.user);
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
      const res = await axios.post(
        "https://zto-server.onrender.com/users/register",
        { email, password, username, phone_number }
      );
      // console.log(res);
      // setMessage(res.data.message)
      console.log(res);
      setAlert(true);
      setStatus(true);
      history.push("/auth");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Box>
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
<<<<<<< HEAD

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
              {/* <button >Log in</button> */}
              <input
                type="button"
                value="Login"
                className="btn solid"
                onClick={handleClick}
              />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  ></svg>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
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
=======
      <Box className={`container ${isSignIn? "sign-up-mode": ""}`} sx={{position:"relative", width:"100%", backgroundColor:"#fff", minHeight:"93vh", overflow:"hidden"}}>
        <Box className="forms-container" sx={{position:"absolute", width:"100%", height:"100%", top:"0", left:"0"}}>

          
          <Box className="signin-signup" sx={{position:"absolute", top:"50%", left:"75%", width:"50%", display:"grid"}} >
              <form   className="sign-in-form" >

                <Typography variant="h4"  sx={{color:"#444", marginBottom:"10px"}}>Sign in</Typography>

                <Box className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Email or phone number" onChange={(e: any) => setEmail(e.target.value)} />
                </Box>
                <Box className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" onChange={(e: any) => setPassword(e.target.value)} />
                </Box>
                {/* <button >Log in</button> */}
                <input type="button" value="Login" className="btn solid" onClick={handleClick} />
                <p className="social-text">Or Sign in with social platforms</p>
                <Box className="social-media">
                  <a href="#" className="social-icon">
                  <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </Box>
              </form> 
              <form className="sign-up-form" >
              <Typography variant="h4"  sx={{color:"#444", marginBottom:"10px"}}>Sign up</Typography>
                <Box className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" onChange={(e: any) => setUserName(e.target.value)} />
                </Box>
                <Box className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} />
                </Box>
                <Box className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" onChange={(e: any) => setPassword(e.target.value)}/>
                </Box>
                <Box className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="phone number" placeholder="phone number" onChange={(e: any) => setPhoneNumber(e.target.value)} />
                </Box>
                <input type="button" className="btn" value="Sign up" onClick={signup}/>
                <p className="social-text">Or Sign up with social platforms</p>
                <Box className="social-media">
                  <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </Box>
              </form> 
              
          </Box>
        </Box>

        <Box className="panels-container">
      
            <Box className="panel left-panel">
              <Box className="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <button className="btn transparent"
                 id="sign-up-btn" 
                onClick={() =>{
                  console.log("Clicked SUP");
                   setIsSignIn(true);
                }} 
                >
                  Sign up
                </button>
              </Box>
              {/* <img src="img/log.svg" className="image" alt="" /> */}
            </Box> 
            <Box className="panel right-panel">
              <Box className="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button 
                className="btn transparent" 
                id="sign-in-btn" 
>>>>>>> Card
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
<<<<<<< HEAD
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
=======
                }} 
                >
                  Sign in
                </button>
              </Box>
              {/* <img src="img/register.svg" className="image" alt="" /> */}
            </Box> 
        </Box>
      </Box>
    </Box>
>>>>>>> Card
  );
};

export default Login;
