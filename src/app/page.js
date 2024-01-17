"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getDate, getTime } from "./utils/time-manager";

export default function Home() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const timeUpdater = setInterval(() => {
      setDateState(new Date());
    }, 1000);

    return () => {
      clearInterval(timeUpdater);
    };
  }, []);

  const date = getDate(dateState);
  const [strTime, meridian] = getTime(dateState);

  return (
    <div className={styles["time-page"]}>
      <div className={styles["time"]}>
        <span className={styles["value"]}>{strTime}</span>
        <span className={styles["meridian"]}>{meridian}</span>
      </div>
      <div className={styles["date"]}>
        <span>{date}</span>
      </div>
    </div>
  );
}
