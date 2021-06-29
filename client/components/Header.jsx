import React from 'react';
import jump from 'jump.js';

export default function Header() {
  return (
    <>
      <img src="/dist/images/bbq-pic.png" className="hero-fixed"/>
      <div className="header">
       <div className="header-left"
          onClick={() => {jump('.whole-landing')}}
          >Smokin' Blues BBQ</div>
        <div className="header-right">
          <span
            className="header-links"
            onClick={() => {jump('.about')}}
            >
            About
          </span>
          <span
            className="header-links"
            onClick={() => {jump('.form-wrapper')}}
            > Contact</span>
          <span
            className="header-links">
            Menu
          </span>
        </div>
      </div>
    </>
  )
}
