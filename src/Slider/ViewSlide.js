import React from 'react'



export default function ViewSlide(props){
    const styles = {
        img: {
            marginLeft: "0px",
        }
    }
    return(
        
            <img className="image" src={props.slide[1].mysrc} alt="Kenworth" style = {styles.img} />
                
    )
}