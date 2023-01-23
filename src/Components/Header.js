import React from "react";
import '../css/Header.css'

function Header({language}) {
  return (
    <div className="header">
      <div className="header-btns">
      <button type="button" className="header-btn">
        <a href="#home">{language === 'ENGLISH' ? 'Home' : 'Inicio'}</a>
        <div className="home-border"></div>
      </button>
      <button type="button" className="header-btn">
        <a href="#about">{language === 'ENGLISH' ? 'About' : 'Sobre'}</a>
        <div className="home-border"></div>
      </button>
      <button type="button" className='header-btn'>
        <a href="#skills">Skills</a>
        <div className="home-border"></div>
      </button>
      <button type="button" className="header-btn">
        <a href="#projects">{language === 'ENGLISH' ? 'Projects' : 'Projetos'}</a>
        <div className="home-border"></div>
      </button>
      <button type="button" className="header-btn">
        <a href="#contact">{language === 'ENGLISH' ? 'Contact' : 'Contato'}</a>
        <div className="home-border"></div>
      </button>
      </div>
    </div>
  )
}

export default Header