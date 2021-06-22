import React, { useState } from 'react';
import ContactForm from './ContactForm.jsx';
import Footer from './Footer.jsx';
import AboutMe from './AboutMe.jsx';

export default function App () {
    const [isOpen, setIsOpen] = useState(false)

    const[openAbout, setOpenAbout] = useState(false)

    return (
      <>
      <div className="App">
        <img className="logo" src="./dist/images/smokin-blues-logo-trimmy.png"/>
      <div className="header-right">
        <span className="header-links" onClick={() => setIsOpen(true)}> Contact</span>
        <span
        className="header-links"
        onClick={() => setOpenAbout(true)}
        > About</span>
        <span
        className="header-links">
        Menu</span>

        <img className="icon"src="./dist/images/BlueFB-Logo.png"/>
        <img className="icon" src="./dist/images/IG-Icon.png"/>
        <img className="icon" src="./dist/images/Twitter-Logo.png"/>
      <div>
        <AboutMe openAbout={openAbout} onClose={() => setOpenAbout(false)}/>
      </div>
      </div>
        <ContactForm open={isOpen} onClose={() => setIsOpen(false)}>
        </ContactForm>
      </div>
      <div>
        <img src="./dist/images/bbq-pic.png" className="hero-image"/>
      </div>
      <Footer setIsOpen={setIsOpen}/>
      </>
    )
  }
