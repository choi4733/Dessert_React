import React from "react";
import { textData } from "../data/textData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Text = (props) => {
  return (
    <section id="textType" className="section">
      <span>{props.title}</span>
      <h2>다채로운 베이커리 컬렉션</h2>
      <div className="text_inner container">
        {textData.map((text) => (
          <div className={`text ${text.className}`} key={text.id}>
            <h3 className="text_title">{text.title}</h3>
            <p className="text_desc">{text.desc}</p>
            <a href="/" className="text_btn">
              더보기
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Text;
