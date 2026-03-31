import React from "react";
import { footerData } from "../data/footerData";

const Footer = () => {
  return (
    <footer id="footerType" className="section">
      <h2 className="blind">푸터영역</h2>
      <div className="footer_inner container">
        <div className="footer_menu">
          {footerData.map((menu, index) => (
            <div key={index}>
              <h2>{menu.title}</h2>
              <ul>
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer_right">
          2021 A TWOSOME PLACE CO., LTD <br />
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
