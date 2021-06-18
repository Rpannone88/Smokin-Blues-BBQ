import React from 'react'

export default function Footer({ setIsOpen}) {
  return (
    <div className="footer">
      <span className="footer-text"
      onClick={setIsOpen}>Contact Us</span>
      <img className="footer-icon"src="./dist/images/BlueFB-Logo.png"/>
      <img className="footer-icon" src="./dist/images/IG-Icon.png"/>
      <img className="footer-icon" src="./dist/images/Twitter-Logo.png"/>
    </div>
  )
}
