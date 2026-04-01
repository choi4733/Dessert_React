import React from "react";
import { menuData, memberData } from "../data/headerData";

const Header = () => {
  return (
    <header id="header">
      <div className="header_inner">
        <div className="header_logo">
          <a href="/">
            Dessert22 <em>Site</em>
          </a>
        </div>
        <div className="header_menu">
          <ul>
            {menuData.map((menu, index) => (
              <li key={index}>
                <a href={menu.link}> {menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header_member">
          {memberData.map((menber, index) => (
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
