import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import {
  BsQuestionCircle,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";

function SideBar() {
  return (
    <aside className="sidebar">
      <h1>Welcome Back Admin</h1>
      <Link to="/admin/" className="home-cms">
        <BsReverseLayoutTextSidebarReverse size={20} /> Accueil CMS
      </Link>
      <Link to="/admin/cars">
        <FaCar size={20} /> Liste des voitures
      </Link>
      <Link to="/admin/faq">
        <BsQuestionCircle size={20} /> Liste des questions
      </Link>
      <Link to="/" className="home-cms">
        <BiHomeAlt2 size={20} /> Retour sur le site
      </Link>
    </aside>
  );
}

export default SideBar;
