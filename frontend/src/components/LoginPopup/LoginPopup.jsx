import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
            </div>
          <div className="login-popup-inputs">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="your name" required />
            )}

            <input type="email" placeholder="your email" required />
            <input type="password" placeholder="your password" required />
          </div>
          <button>
            {currentState === "Signup" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms and conditions.</p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account ?{" "}
              <span onClick={() => setCurrentState("Signup")}>Signup here</span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          )}
      
      </form>
    </div>
  );
}

export default LoginPopup;
