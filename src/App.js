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
        <div className='title_div'><h1>Trond Makonese <br></br> Front End Developer</h1></div>
       </div>
       {/* <div className='social_wrapper'>
        <a href="mailto:trondation@gmail.com"><img src={emailIcon} alt='email icon' className='icon_image'></img></a>
        <a href="//github.com/trond240"><img src={gitIcon} alt='gitHub icon' className='icon_image'></img></a>
        <a href="https://www.linkedin.com/in/trond-makonese-05610115a/"><img src={linkIcon} alt='linkDin icon' className='icon_image'></img></a>
        <a href=''><img src={resumeIcon} alt='resume icon' className='icon_image'></img></a>
       </div> */}
       <About />
       <Projects />
       <Contact />
      </header>
    </main>
  );
}

export default App;
