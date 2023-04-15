import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content flex justify-between py-5 px-40 md:px-30">
        <a className="btn btn-ghost normal-case text-3xl">Auth Master</a>
      <nav className="text-3xl gap-8">
      <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      </div>
    </div>
  );
};

export default Header;
