import React from "react";
import { imgTextData } from "../data/imgTextData";

const ImageText = (props) => {
  return (
    <section id="imgTextType" className="section">
      <h2 className="blind">{props.title}</h2>
      <div className="imgText_inner container">
        <div className="imgText_txt">
          <div className="small">{imgTextData.subtitle}</div>
          <h3 className="title">{imgTextData.title}</h3>
          <div className="desc">{imgTextData.desc}</div>
          <ul className="list">
            {imgTextData.lists.map((list, index) => (
              <li key={index}>
                <a href="/">{list}</a>
              </li>
            ))}
          </ul>
        </div>
        {imgTextData.recipes.map((recipe) => (
          <div className={`imgText_img ${recipe.className}`} key={recipe.id}>
            <a href="/" className={recipe.btnClass}>
              {recipe.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageText;
