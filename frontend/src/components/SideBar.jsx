import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside>
      <Link to="/admin/"> Accueil</Link>
      <Link to="/admin/cars"> Liste des voitures</Link>
      <Link to="/admin/brands"> Liste des marques</Link>
      <Link to="/admin/profils">Liste des utilisateurs</Link>
      <Link to="/admin/faq">Liste des questions</Link>
    </aside>
  );
}

export default SideBar;
