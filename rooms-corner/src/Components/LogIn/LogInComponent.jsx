import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../API/Services/UserService/UserApi/LogIn";

const LogInComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = { email, password };
      const response = await userLogin(user);
      console.log("User successfully Logged-In:", response);
      document.cookie = `token=${response.token}; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/; SameSite=Lax; Secure`;

      // Optionally, you can redirect the user to another page after successfull login
      navigate("/");
    } catch (error) {
      console.log(
        "User failed to Log-In, Incorrect Username or Password:",
        error
      );
    }
  };

  return (
    <>
      {/*  LOGIN COMPONENT */}
      <div className={`login ${props.isLoginOpen ? "show-login" : ""}`}>
        <form onSubmit={handleSubmit} className="login__form">
          <h2 className="login__title">Log In</h2>
          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label">
                Email
              </label>
              <input
                type="email"
                placeholder="Write your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login__input"
              />
            </div>
            <div>
              <label htmlFor="password" className="login__label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
              />
            </div>
          </div>
          <div>
            <p className="login__signup">
              You do not have an account? <Link to={"/register"}>Sign up</Link>
            </p>
            <Link to={"/"} className="login__forgot">
              You forgot your password
            </Link>
            <button type="submit" className="login__button">
              Log In
            </button>
          </div>
        </form>
        <i
          className="ri-close-line login__close"
          onClick={props.toggleLogin}
        ></i>
      </div>
    </>
  );
};

export default LogInComponent;
