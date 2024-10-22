import React, { useRef } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactElement;
}

export default function Slider({ children }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);

  function scrollLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= 150;
  }
  function scrollRight() {
    if (!sliderRef.current) return;
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
