import React from "react";
import "./footer.scss";
import facebook from "../assets/Subtract (1).svg";
import twitter from "../assets/Subtract.svg";
import instagram from "../assets/Union.svg";
import logo from "../assets/Vector (1).svg";
import logos from "../assets/Vector.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-main">
          <div className="home">
            <p>Home</p>
            <p>Page1</p>
            <p>Page2</p>
          </div>
        </div>
        <div className="separator"></div>
        <div className="logos-section">
          <img className="logoos" src={logos} />
          <img className="logoos" src={logo} />
          <img className="logoos" src={twitter} />
          <img className="logoos" src={facebook} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
