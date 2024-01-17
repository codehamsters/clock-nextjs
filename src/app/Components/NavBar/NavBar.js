"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import NavBarBtn from "./NavBarBtn/NavBarBtn";
import { usePathname } from "next/navigation";

const Navbar = ({ activeTabIndex = 0, setActiveTabIndex = () => {} }) => {
  const btns = [
    { icon: "fa-clock", label: "time" },
    { icon: "fa-alarm-clock", label: "alarm" },
    { icon: "fa-stopwatch", label: "stopwatch" },
  ];

  const pathName = usePathname();

  return (
    <nav className={styles.navbar}>
      {btns.map((obj, index) => {
        return (
          <NavBarBtn
            {...obj}
            isActive={pathName.toLowerCase() === `/${obj.label}`}
            key={index}
          />
        );
      })}
    </nav>
  );
};

export default Navbar;
