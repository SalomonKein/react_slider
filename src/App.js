import React, {useState} from "react";
import ButtonPrew from "./Slider/ButtonPrew";
import ButtonNext from "./Slider/ButtonNext";
import WindowSlide from "./WindowSlide";

function App() {
  const [slideImg, setSlide] = useState([
    {mysrc: "img/7.jpeg"},
    {mysrc: "img/1.jpeg"},
    {mysrc: "img/2.jpeg"},
    {mysrc: "img/3.jpeg"},
    {mysrc: "img/4.jpeg"},
    {mysrc: "img/5.jpeg"},
    {mysrc: "img/6.jpeg"},
  ]);

  function prevSlide() {
    setSlide([
      slideImg[slideImg.length - 1],
      ...slideImg.slice(0, slideImg.length - 1),
    ]);
  }

  function nextSlide() {
    setSlide([...slideImg.slice(-slideImg.length + 1), slideImg[0]]);
  }

  return (
    <div className="container">
      <ButtonPrew f={prevSlide} />
      <WindowSlide slide={slideImg}></WindowSlide>
      <ButtonNext f={nextSlide} />
    </div>
  );
}

export default App;
