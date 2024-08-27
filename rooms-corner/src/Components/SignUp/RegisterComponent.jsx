import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../API/Services/UserService/UserApi/SignUp";

const RegisterComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUserData = {
        firstName,
        lastName,
        email,
        password,
        gender,
        contact,
        age,
        address,
        city,
        pinCode,
      };
      const newUserRole = { userRole };
      const response = await registerUser(newUserData, newUserRole);
      console.log("User registered, signUp successfull:", response);

      // Optionally, you can redirect the user to another page after successfull registration
      navigate("/login");
    } catch (error) {
      console.error("User failed to signUp or registration:", error);
    }
  };

  return (
    <>
      {/*  REGISTER COMPONENT - Reused from LOGIN ClassName Same as LOGIN*/}
      <div className="login show-login" style={{ overflowY: "scroll" }}>
        <form onSubmit={handleSubmit} className="login__form">
          <h2 className="login__title">Sign Up</h2>
          <div className="login__group">
            <div>
              <label htmlFor="firstName" className="login__label">
                First Name
              </label>
              <input
                type="text"
                placeholder="Write your firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="login__input"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="login__label">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Write your lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="login__input"
              />
            </div>
            <div>
              <label htmlFor="contact" className="login__label">
                Contact
              </label>
              <input
                type="text"
                placeholder="Write your contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="login__input"
              />
            </div>
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
            <div>
              <label htmlFor="role" className="login__label">
                Role
              </label>
              <input
                type="text"
                placeholder="Enter user role"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="login__input"
              />
            </div>
          </div>
          <div>
            <p className="login__signup">
              Already have an account? <Link to={"/login"}>Log in</Link>
            </p>
            <button type="submit" className="login__button">
              Log In
            </button>
          </div>
        </form>

        <Link to={"/"}>
          {" "}
          <i className="ri-close-line login__close"></i>
        </Link>
      </div>
    </>
  );
};

export default RegisterComponent;
