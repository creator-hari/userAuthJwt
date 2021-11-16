import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/">
        <h3>Back</h3>
      </Link>
    </div>
  );
}

export default Login;
