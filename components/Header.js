import { useEffect, useState } from "react";
import _ from "lodash";
import styles from "../styles/Header.module.css";

export default function Header({ logo, title }) {
  const [positionY, setPositionY] = useState(0);

  const throttledScroll = _.throttle(() => {
    setPositionY(window.scrollY);
    console.log(scrollY);
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <div
        className={styles.title}
        style={{ fontSize: `${Math.max(-0.00445 * positionY + 3, 1)}rem` }}
      >
        {title}
      </div>
    </header>
  );
}
