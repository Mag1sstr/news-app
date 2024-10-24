import React, { useRef } from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";

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
  const { isDark } = useTheme();
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : null}`}>
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
