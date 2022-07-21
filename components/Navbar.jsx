import React from "react";
import TrollFace from "../images/TrollFace.png";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={TrollFace} alt="troll face" className="navbar--logo" />
      <h1 className="navbar--header">Meme Generator</h1>
      <p>React Course - Project 3</p>
    </nav>
  );
}

export default Navbar;
