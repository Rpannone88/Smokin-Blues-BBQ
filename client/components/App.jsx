import React, { useState } from 'react';
import ContactForm from './ContactForm.jsx';

export default function App () {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="App">
        <span className="title">Pannone's Pig Roast</span>
        <span className="form" onClick={() => setIsOpen(true)}>Click To Contact</span>
        <ContactForm open={isOpen} onClose={() => setIsOpen(false)}>
        </ContactForm>
      </div>
    )
  }

