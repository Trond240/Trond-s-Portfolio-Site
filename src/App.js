import logo from './logo.svg';
import './App.css';
import trondImage from './image-of-trond.jpeg'
import linkIcon from './linkDin.jpeg'
import resumeIcon from './resume.jpeg'
import gitIcon from './gitHub.png'
import emailIcon from './email.jpeg'
import { Projects } from './projects/projects.js'
import { About } from './about/about.js'
import { Contact } from './contact/contact.js'
import { NavBar } from './navBar/navBar.js'




function App() {
  return (
    <main className="App" id='Home-section'>
      <NavBar />
      <header className='main-page'>
        <div className='background_div'>
          <div className='rhex'></div>
          <div className='title'><h1><span className='author_name'>Trond Makonese</span><br></br><br></br>Software Developer</h1></div>
        </div>
       </header>
       <About />
       <Projects />
       <Contact />
       <link rel="preconnect" href="https://fonts.gstatic.com"></link>
       <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet"></link>
    </main>
  );
}

export default App;
