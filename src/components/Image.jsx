import React, { useEffect, useRef } from "react";
import { imageData } from "../data/imageData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Image = (props) => {
  const imgInnerRef = useRef(null);
  const imgRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imgRef.current,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "bounce.inOut",

        scrollTrigger: {
          trigger: imgInnerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section id="imageType" className="section">
      <h1 className="blind">{props.title}</h1>
      <h2>프리미어 케이크와 디저트를 만나보세요</h2>
      <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
      <div className="image_inner container" ref={imgInnerRef}>
        {imageData.map((img, index) => (
          <article className={`image ${img.className}`} key={img.id} ref={(el) => (imgRef.current[index] = el)}>
            <h3 className="image_title">{img.title}</h3>
            <p className="image_desc">{img.desc}</p>
            <p className={`image_btn ${img.btn}`}>자세히 보기</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Image;
