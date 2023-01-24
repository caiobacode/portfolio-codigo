import './css/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Transition from './Components/transition';
import { useState } from 'react';

function App() {
  const [language, setLanguege] = useState('ENGLISH')
  return (
    <body>
      <div>
        <Header language={language}/>
        <Home language={language} changeLanguage={setLanguege}/>
        <Transition nameClass={'brick-transition'} />
        <About language={language} />
        <Transition nameClass={'about-skills'} />
        <Skills language={language} />
        <Transition nameClass={'skills-projects'} />
        <Projects language={language} />
        <Transition nameClass={'brick-transition'} />
        <Contact language={language} />
      </div>
    </body>
  );
}

export default App;
