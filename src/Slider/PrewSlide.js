import React from "react";

export default function PrewSlide(props) {
  const styles = {
    img: {
      marginLeft: "-250px",
    },
  };
  return (
    <img
      className="image previous"
      src={props.slide[0].mysrc}
      alt="Peter Bilt"
      style={styles.img}
    />
  );
}
