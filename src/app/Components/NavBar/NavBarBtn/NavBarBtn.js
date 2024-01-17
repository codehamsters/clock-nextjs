import React from "react";
import styles from "./navbar-btn.module.css";
import Link from "next/link";

const NavBarBtn = ({
  label = "",
  icon = "",
  isActive = false,
  onClick = () => {},
}) => {
  let activeClass = isActive ? styles.active : "";

  return (
    <Link href={"/" + label} className={styles["link"]}>
      <button
        className={`${styles["navbar-btn"]} ${activeClass}`}
        onClick={onClick}
      >
        <i className={"fa-regular " + icon}></i>
        <span>{label}</span>
      </button>
    </Link>
  );
};

export default NavBarBtn;
