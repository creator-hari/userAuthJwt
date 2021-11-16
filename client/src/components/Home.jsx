import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">
        <h3>Login</h3>
      </Link>
      <Link to="/register">
        <h3>Register</h3>
      </Link>
    </div>
  );
}

export default Home;
