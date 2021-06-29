import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideNext } from "../redux/actions";


export default function ButtonNext() {
  const dispatch = useDispatch()
  const slideShow = useSelector(state => state.slides.slideImg )

  return (
    <button className="next__btn" onClick={() => dispatch(slideNext(slideShow))}>
      Next
    </button>
  );
}
