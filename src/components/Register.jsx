import React, { useState } from "react";
import "../components/login.css";

export const Register = (props) => {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    //do not need to lose values when refresh, to prevent it
    e.preventDefault();
    //to see console values
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>CREATE ACCOUNT </h2>
        <label htmlFor="name">Full name:</label>
        <input value={name} name="name" id="name" placeholder="Full Name" />
        <label htmlFor="email">E-mail:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />

        <button type="submit">Register</button>
      </form>
      <p>
        If you already have an account?
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Log in
        </button>
      </p>
    </div>
  );
};
