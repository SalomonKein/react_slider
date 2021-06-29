import { PREV_SLIDE } from "./types";
import { NEXT_SLIDE } from "./types";




const initialState = {
   slideImg: [
   {mysrc: "img/7.jpeg"},
   {mysrc: "img/1.jpeg"},
   {mysrc: "img/2.jpeg"},
   {mysrc: "img/3.jpeg"},
   {mysrc: "img/4.jpeg"},
   {mysrc: "img/5.jpeg"},
   {mysrc: "img/6.jpeg"},]
}

export const prevReducer = (state = initialState, action) =>{
    switch (action.type ){
        case PREV_SLIDE:
            return {...state, slideImg: action.payload};
        case NEXT_SLIDE:
            return {...state, slideImg: action.payload};
        default: return state; 

    }
}