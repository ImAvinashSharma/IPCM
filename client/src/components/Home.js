import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Home page</h1>
      <Link to="/signup">sign up</Link>
      <br />
      <Link to="/signin">sign in</Link>
    </div>
  );
}
