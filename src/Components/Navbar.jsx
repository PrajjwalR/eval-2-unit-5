import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/signup">
        <p>SignUp</p>
      </Link>
      <Link to="/adddata">
        <p>Add Book</p>
      </Link>
      <Link to="/admin">
        <p>Admin</p>
      </Link>
    </div>
  );
};

export default Navbar;
