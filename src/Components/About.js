import React from "react";
import '../css/About.css';
import caioFoto from '../Media/euSquare3.jpg'

function About({language}) {
  return (    
      <div className="about-div" id='about'>
        <div className="about-title-div">
          <img className="foto-eu" alt="foto-caio" src={caioFoto} />
          <h2 className="h2-title">{language === 'ENGLISH' ? 'Hey There!' : 'Sobre Mim :)'}</h2>
          {
            language === 'ENGLISH' ? <p className="about-text-p">I'm Caio, a 18 years old Web Developer!</p>
            :
            <p className="about-text-portuguese">Sou Caio, um Desenvolvedor Web de 18 anos!</p>
          }
          
        </div>
        
        <div className="about-text-div">
          <div className="about-div-text">
          <text className="about-text">
          Sempre apaixonado por tecnologia, comecei a programar no momento em que 
          tive uma oportunidade, e desde então venho buscando me desenvolver 
          cada vez mais nessa área, sou relativamente novo neste segmento 
          porém sempre estou em busca de novos aprendizados e experiências,
          valorizando cada etapa da minha jornada.

          </text>
          </div>
        </div>
      </div>
  )
}

export default About;