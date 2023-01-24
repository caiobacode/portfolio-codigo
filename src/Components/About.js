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
            {
              language === 'ENGLISH' ? (
                <text className="about-text">
                  i've always been a technology lover, i was a video editor, 
                  so, I've used many different programs and technologies, 
                  I liked it a lot, but i found my real vocation when i coded 
                  my first project in Python, the feeling of completing a challenge, 
                  and resolve problems is so satisfying, after that i started to study 
                  coding a lot and joined in Trybe Web Developer course, since then 
                  I have done a many projects in JavaScript/ReactJS.
                </text>
              )
              :

          <text className="about-text">
          Sempre apaixonado por tecnologia, já fui editor de video, então,
          eu ja usei muitos programas e tecnologias diferentes,
          e gostei muito disso, mas eu achei minha real vocação quando eu "codei" 
          meu primeiro projeto em Python, a sensação de resolver problemas é muito satisfatótia,
          depois disso eu comecei a estudar código bastante e entrei no curso de Devolvimento Web da Trybe,
          após isso fiz diversos projetos em React/JS
          </text>
          }
          </div>
        </div>
      </div>
  )
}

export default About;