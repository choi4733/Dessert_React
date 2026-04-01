import React, { useEffect, useRef } from "react";
import { textData } from "../data/textData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Text = (props) => {
  const textInnerRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power1.out",

        scrollTrigger: {
          trigger: textInnerRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section id="textType" className="section">
      <span>{props.title}</span>
      <h2>다채로운 베이커리 컬렉션</h2>
      <div className="text_inner container" ref={textInnerRef}>
        {textData.map((text, index) => (
          <div className={`text ${text.className}`} key={text.id} ref={(el) => (textRef.current[index] = el)}>
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
