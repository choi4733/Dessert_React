import React from "react";

const Banner = (props) => {
  return (
    <section id="bannerType" className="section">
      <h2 className="blind">{props.title}</h2>
      <div className="banner_inner">
        <h3 className="title">특별함으로 물들어요</h3>
        <p className="desc">
          카페와 어울리는 세상의 모든 디저트{" "}
          <a href="/" title="투썸플레이스 이동">
            www.twosme.co.kr
          </a>
        </p>
        <span className="small">배너 유형</span>
      </div>
    </section>
  );
};

export default Banner;
