import React, { useState } from "react";

export const Login = (props) => {
  // initially values are empty
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const handleSubmit = (e) => {
    //do not need to lose values when refresh, to prevent it
    e.preventDefault();
    //to see console values
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
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

        <button  type="submit">Log In</button>
      </form>
      <p>
        If you don't have an account?
        <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Register here ..!</button>
      </p>
      
    </div>
  );
};
