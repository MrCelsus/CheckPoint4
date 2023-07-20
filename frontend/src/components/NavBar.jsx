import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BsQuestionCircle,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";

import Logo from "../assets/Logo_Blanc_Bleu.jpg";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const whiteLogo = {
    color: "white",
  };
  return (
    <nav className="navbar">
      <img src={Logo} alt="Jeun'Automobile" className="logo-container" />
      <button type="button" className="burger-menu" onClick={toggleMenu}>
        <RxHamburgerMenu size={42} style={whiteLogo} />
      </button>
      <div className={`menu ${showMenu ? "show" : ""}`}>
        <Link to="/">
          <h4>Home</h4>
          <span>
            <BiHome size={25} />
          </span>
        </Link>
        <Link to="/faq">
          <h4>F.A.Q</h4>
          <span>
            <BsQuestionCircle size={25} />
          </span>
        </Link>
        <Link to="/admin">
          <h4>CMS</h4>
          <span>
            <BsReverseLayoutTextSidebarReverse size={25} />
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
