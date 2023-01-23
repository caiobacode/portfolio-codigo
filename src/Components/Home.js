import React from "react";
import '../css/Home.css'
import setaPraBaixo from '../Media/seta-branca.png'
import gitHubImg from '../Media/github-purple.png'
import linkedinImg from '../Media/linkedin.png'
import brasilImg from '../Media/brasil.png'
import euaImg from '../Media/eua.png'

function Home(props) {
  const { language, changeLanguage } = props
  const marGin = language === 'ENGLISH' ? 0 : 80;
  return (    
    <div className="home" id='home'>
      <div className="title-div">
        <h1 className="Title">Caio Oliveira</h1>
      </div>
      <div>
        <button
          className="github-btn"
          type="button"
          onClick={() => window.open('https://github.com/caiobacode/')} 
          >
            <img className="github-img" alt="github-img" src={gitHubImg}/>
        </button>
          <button
          className="linkedin-btn"
          type="button"
          onClick={() => window.open('https://www.linkedin.com/in/caio-oliveira-de-sousa/')} 
          >
            <img 
              className="linkedin-img"
              alt="linkedin-img" 
              src={linkedinImg}
              />
          </button>
      </div>
      <div className="subtitle-div">
        <h2 className="subTitle">{language === 'ENGLISH' ? 'Web Developer' : 'Desenvolvedor Web'}</h2>
        <div className="white-line">
        </div>
      </div>
      <div className="language-div">
        <button 
        disabled={language === 'ENGLISH'} 
        onClick={() => changeLanguage('ENGLISH')} 
        type="button" 
        className="language-btn-eua">
          <img className="eua-img" alt="eua-img" src={euaImg}/>
        </button>
        <button 
        disabled={language === 'PORTUGUESE'} 
        onClick={() => changeLanguage('PORTUGUESE')} 
        type="button" 
        className="language-btn">
          <img className="brasil-img" alt="brasil-img" src={brasilImg}/>
        </button>
        <div className="line-bege"/>
      </div>
      <div className="home-btn-div">
        <a href="#about" className="home-btn-about">
        {language === 'ENGLISH' ? 'About me' : 'Sobre mim'}
          <img className="seta" alt="setinha" src={setaPraBaixo} />
        </a>
      </div> 
    </div>
  )
}

export default Home