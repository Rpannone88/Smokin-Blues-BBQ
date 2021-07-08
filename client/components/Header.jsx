import React, { useState } from 'react';
import jump from 'jump.js';

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const changeNav = () => {
    if(window.scrollY > 100) setNavbar(true)
    else setNavbar(false)
  }
  window.addEventListener('scroll', changeNav)
  return (
    <>
      <img src="/dist/images/bbq-pic.png" className="hero-fixed"/>

      <div className={navbar ? "header active" : "header"}>

       <div className="header-left"
          onClick={() => {jump('.whole-landing')}}
          >SMOKIN' BLUES</div>
        <div className="header-right">
          <span
            className="header-links"
            onClick={() => {jump('.about')}}
            >
            ABOUT
          </span>
          <span
            className="header-links"
            onClick={() => {jump('.menu-wrapper')}}
            >
            MENU
          </span>
          <span
            className="header-links"
            onClick={() => {jump('.form-wrapper')}}
            > CONTACT</span>
        </div>
      </div>
    </>
  )
}
