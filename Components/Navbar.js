import React from "react";
import Logo from "/assets/Logo.svg";
import Styles from "../Components/Navbar.Module.css";

const Navbar = () => {
  return (
    <section>
      <div>
        <img src={Logo} className={Styles.Logo} />
      </div>
      <div>
        <ul>
          <li>
            <a href="https://codesandbox.io/s/react-p1-0gtic?file=/Components/Navbar.js">
              Code
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/the.loudsilence/" id="insta">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
