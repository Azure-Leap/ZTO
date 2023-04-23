import { AuthContext } from "@/context/UserContext";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
// import {useNavigate} from "rea"
import axios from 'axios';
import Link from "next/link";

const Login = () => {
const { setUser} = useContext(AuthContext)
// const [user, setUser] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState();
 const [message, setMessage] = useState();
const [isSignIn, setIsSignIn] = useState('sign-in-form')

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container");

      sign_up_btn?.addEventListener("click", () => {
        container?.classList.add("sign-up-mode");
      });

      sign_in_btn?.addEventListener("click", () => {
        container?.classList.remove("sign-up-mode");
      });

      return () => {
        sign_up_btn?.removeEventListener("click", () => {
          container?.classList.add("sign-up-mode");
        });

        sign_in_btn?.removeEventListener("click", () => {
          container?.classList.remove("sign-up-mode");
        });
      };
    }
  }, []);

  const handleClick = async (e:any) => {
    try {
      e.preventDefault()
      const res = await axios.post('http://localhost:9010/auth/login', {email, password})
      console.log(res.data.user);
      setUser(res.data.user);
      // setMessage(res.statusText)      
      setTimeout(() => {
        <Link href='/'/>
      }, 1000)      
      // navigate('/dashboard', { replace: true });
    } catch (error:any) {
      console.log(error);
      setMessage(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">    
          {isSignIn?
            <form  className="sign-in-form" onSubmit={(e)=>handleClick(e)} >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email or phone number" onChange={(e:any)=>setEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" onChange={(e:any)=>setPassword(e.target.value)}/>
              </div>
              {/* <button >Log in</button> */}
              <input type="submit" value="Login" className="btn solid"  />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
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
            </form> :  <form className="sign-up-form" onSubmit={(e)=>handleClick(e)}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
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
            </form>  }
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
              <button className="btn transparent" id="sign-up-btn" onClick={()=>setIsSignIn('sign-up-form')} >
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div> 
         <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={()=>setIsSignIn('sign-in-form')} >
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>  
        </div> 
      </div>
    </div>
  );
};

export default Login;
