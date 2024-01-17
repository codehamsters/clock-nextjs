"use client";
import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import SideBarBtn from "./SideBarBtn/SideBarBtn";
import { usePathname } from "next/navigation";

const SideBar = ({ activeTabIndex = 0, setActiveTabIndex = () => {} }) => {
  const btns = [
    { icon: "fa-clock", label: "time" },
    { icon: "fa-alarm-clock", label: "alarm" },
    { icon: "fa-stopwatch", label: "stopwatch" },
  ];
  const pathName = usePathname();

  return (
    <div className={styles.sidebar}>
      <h1>Clock</h1>
      {btns.map((obj, index) => {
        return (
          <SideBarBtn
            {...obj}
            isActive={pathName.toLowerCase() === `/${obj.label}`}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SideBar;
