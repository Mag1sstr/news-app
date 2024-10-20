import React, { useRef } from "react";
import styles from "./styles.module.css";

export default function Slider({ children }) {
  const sliderRef = useRef(null);

  function scrollLeft() {
    sliderRef.current.scrollLeft -= 150;
  }
  function scrollRight() {
    sliderRef.current.scrollLeft += 150;
  }
  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
}
