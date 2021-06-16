import React, { useState } from 'react';
import ButtonPrew from './Slider/ButtonPrew';
import ButtonNext from './Slider/ButtonNext';
import WindowSlide from './WindowSlide';

function App() {  

  const [slideImg, setSlide] = useState ([
    {mysrc:"img/7.jpeg",},
    {mysrc:"img/1.jpeg",},
    {mysrc:"img/2.jpeg",},
    {mysrc:"img/3.jpeg",},
    {mysrc:"img/4.jpeg",},
    {mysrc:"img/5.jpeg",},
    {mysrc:"img/6.jpeg",},
    
  ])

  // let q = slideImg.slice(0, slideImg.length-1);
  // let d = slideImg.slice(-slideImg.length+1);

  console.log("1", ...(slideImg.slice(0, slideImg.length-1)), (slideImg[slideImg.length-1]));
  console.log("2", ...(slideImg.slice((-slideImg.length+1))), (slideImg[0]));

  function cLog(v) {
    
    if( v === 'previous' ) {setSlide(...(slideImg.slice(0, slideImg.length-1)), (slideImg[slideImg.length]))} 
    else {setSlide(...(slideImg.slice((-slideImg.length+1))), (slideImg[0]))} 
  }

  return (

    <div className="container">
        <ButtonPrew f = {cLog}/>
            <WindowSlide slide = {slideImg}>            
            </WindowSlide> 
        <ButtonNext f = {cLog}/>
     </div>
    
  );
}

export default App;
