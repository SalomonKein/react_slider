import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slidePrev } from "../redux/actions";

export default function ButtonPrew(prop) {
  const dispatch = useDispatch()
  const slideShow = useSelector(state => state.slides.slideImg )

  return (
    <button className="previous__btn" onClick={() => dispatch(slidePrev(slideShow))}>
      Previous
    </button>
  );
}
