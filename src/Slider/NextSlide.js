import React from 'react'

export default function NextSlide(props){
    console.log(props, "from nextSlide");
    const styles = {
        img: {
            marginLeft: "250px",
        }}
    return(
        <img className="image next" src={props.slide[2].mysrc} alt="Western Star" style = {styles.img} />
        
    )
}