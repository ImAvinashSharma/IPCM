import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/signup">sign up</Link>
      <br />
      <Link to="/signin">sign in</Link>
    </div>
  );
}

export default Home;
