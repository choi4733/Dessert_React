import React from "react";
import { headerData } from "../data/headerData";

const Header = () => {
  return (
    <header id="header">
      <div className="header_inner">
        <div className="header_logo">
          <a href="/">
            Dessert <em>Site</em>
          </a>
        </div>
        <div className="header_menu">
          <ul>
            {headerData.menu.map((menu, index) => (
              <li key={index}>
                <a href="/">{menu}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header_member">
          {headerData.menber.map((menber, index) => (
            <a href="/" key={index}>
              {menber}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
