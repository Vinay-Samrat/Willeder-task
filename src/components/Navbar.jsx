import React from "react";
import union from "../assets/Union.svg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="log-container">
          <img src={union} className="" />
          <span className="logo-name">LOGO</span>
        </div>
        <div className="flex ">
          <h4>Home</h4>
          <h4>Page 1</h4>
          <h4>Page 2</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
