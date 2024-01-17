"use client"
import React, { useState } from 'react'
import SideBar from './Components/SideBar/SideBar'
import Navbar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'

const Root = ({children}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <>
        <SideBar activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}/>
        <main>
            <Header />
            {children}
        </main>
        <Navbar activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
    </>
  )
}

export default Root