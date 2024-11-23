import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SideBarData from '../Data/SideBarData.json'
import SideBarLinks from './SideBarLinks'
function sidebar() {

  const [NavActive, setNavActive] = useState({
    open: ''
  })

  const location = useLocation();

  useEffect(() => {
    const Section = document.querySelector("section");
    if (NavActive.open === "open") {
      Section.classList.add("open");
    } 
  }, [location])

  const SideNavActivatar = () => {
    const Section = document.querySelector("section");
    if (NavActive.open !== "open") {
      Section.classList.add("open");
      setNavActive({
        open: 'open'
      })
    } else {
      setNavActive({
        open: ''
      })
      Section.classList.remove("open");
    }
  }

  return (
    <div className={'aside ' + NavActive.open}>
      <div className='logo'>
          {/* <img src={SideBarData.logo} /> */}
           <span>Protofolio</span>
      </div>
      <div className={'nav-toggler ' + NavActive.open} onClick={() => SideNavActivatar()}>
        <span></span>
      </div>
      <ul className='nav'>
        <SideBarLinks list={SideBarData.links} location={location} />
      </ul>
    </div>
  )
}

export default sidebar