import React from "react";
import styles from "./sidebar-btn.module.css";
import Link from "next/link";

const SideBarBtn = ({
  label = "",
  icon = "",
  isActive = false,
  onClick = () => {},
}) => {
  let activeClass = isActive ? styles.active : "";

  return (
    <Link href={"/" + label} className={styles["link"]}>
      <button
        className={`${styles["sidebar-btn"]} ${activeClass}`}
        onClick={onClick}
      >
        <i className={"fa-regular " + icon}></i>
        <span>{label}</span>
      </button>
    </Link>
  );
};

export default SideBarBtn;
