import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [clickBtn, setClickBtn] = useState(false);
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <div
        onClick={() => {
          toggleTheme();
          setClickBtn(!clickBtn);
        }}
        className={`${styles.button} ${clickBtn ? styles.active : null}`}
      >
        <div className={styles.circle}></div>
      </div>
    </header>
  );
}
