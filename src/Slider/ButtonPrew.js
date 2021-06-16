import React from 'react'

export default function ButtonPrew(prop){
    return(
        <button className="previous__btn" onClick = {()=> prop.f("previous")}>Previous</button>
    )
}