import React, { useEffect } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import Banner from "./components/Banner";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Text from "./components/Text";
import Footer from "./components/Footer";

import link from "./utils/link";
import reveal from "./utils/reveal";
import smooth from "./utils/smooth";

const App = () => {
  useEffect(() => {
    link();
    reveal();
    smooth();
  });

  return (
    <>
      <Header />
      <Slider title="슬라이더 영역" />
      <Image title="이미지 영역" />
      <ImageText title="이미지 텍스트 영역" />
      <Card title="카페, 그 이상의 문화를 만들다" element="green" />
      <Banner title="배너 영역" />
      <Text title="텍스트 영역" />
      <Footer />
    </>
  );
};

export default App;
