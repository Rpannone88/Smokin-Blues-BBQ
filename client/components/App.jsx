import React from 'react';
import jump from 'jump.js';
import Header from './Header.jsx';
import Landing from './Landing.jsx';
import About from './About.jsx';
import ContactForm from './ContactForm.jsx';
import Menu from './Menu.jsx'
import Footer from './Footer.jsx';

export default function App () {
    return (
      <>
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <About></About>
      <Menu></Menu>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
      </>
    )
  }
