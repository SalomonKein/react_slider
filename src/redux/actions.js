import { PREV_SLIDE, NEXT_SLIDE } from "./types";


export function slidePrev(slideImg){    
        return dispatch => {
            const showImg = [slideImg[slideImg.length - 1],
            ...slideImg.slice(0,slideImg.length - 1)]
            dispatch ({type: PREV_SLIDE, payload: showImg})
    }
}

export function slideNext(slideImg){
    return dispatch => {
        const showImg = [...slideImg.slice(-slideImg.length + 1), slideImg[0]]
        dispatch ({type: NEXT_SLIDE, payload: showImg})
    }
}