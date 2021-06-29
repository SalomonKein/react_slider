import React from "react";
import { connect } from "react-redux";

const ViewSlide = ({ViewSlide}) => {
  const styles = {
    img: {
      marginLeft: "0px",
    },
  };
  return (
    <img
      className="image"
      src={ViewSlide[1].mysrc}
      alt="Kenworth"
      style={styles.img}
    />
  );
}

const mapStateToProps = state => {
  return{
    ViewSlide: state.slides.slideImg
  }
}

export default connect(mapStateToProps, null)(ViewSlide)