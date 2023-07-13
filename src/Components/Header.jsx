import React from "react";
import logo from "../images/logo.jpg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  
  const navigation = useNavigate();

  return (
    <>
      <nav>
        <div className="na">
          <img src={logo} alt="logo" className="image2" />
          <h1 id="alcheringa">
            Alcheringa <span id="side">Connect</span>
          </h1>
          <div>
            <ul className="lists">
              <li>
                <button className="btnlogin" onClick={() => navigation('/')}>
                  <b>Login</b>
                </button>
              </li>
              <li onClick={() => navigation('/register')}>New User</li>
              <li onClick={() => navigation('/about')}>About</li>
              <li onClick={() => navigation('/contact')}>Contact Us</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
