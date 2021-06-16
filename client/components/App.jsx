import React, { useState } from 'react';
import ContactForm from './ContactForm.jsx';
import Logo from './smokin-blues-logo.png';

export default function App () {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="App">
        <img src={Logo}/>
        <span className="form" onClick={() => setIsOpen(true)}> Contact</span>
        <ContactForm open={isOpen} onClose={() => setIsOpen(false)}>
        </ContactForm>
      </div>
    )
  }

