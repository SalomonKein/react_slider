import React from 'react'

export default function ButtonNext(prop){
    return(
        <button className="next__btn" onClick = {()=> prop.f()}>Next</button>
    )
}