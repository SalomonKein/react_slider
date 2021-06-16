import React from 'react'
import ViewSlide from './Slider/ViewSlide';
import NextSlide from './Slider/NextSlide';
import PrewSlide from './Slider/PrewSlide';

export default function WindowSlide(props){
    console.log(props, "from window");
    return(
        <div className="display__show">
            <PrewSlide slide ={props.slide}/>            
                <ViewSlide slide = {props.slide}/>                       
            <NextSlide slide = {props.slide}/>
            
        </div>
        
        
    )
}