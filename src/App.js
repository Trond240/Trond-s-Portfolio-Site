import logo from './logo.svg';
import './App.css';
import trondImage from './image-of-trond.jpeg'
import linkIcon from './linkDin.jpeg'
import resumeIcon from './resume.jpeg'
import gitIcon from './gitHub.png'
import emailIcon from './email.jpeg'
import {Projects} from './projects/projects.js'
import {About} from './about/about.js'
import {Contact} from './contact/contact.js'




function App() {
  return (
    <main className="App">
      <header className='main-page'>
       <div className='background_image_div'>
        {/* <h1 className='hello'>Hello, I'm <span>Trond Makonese</span></h1> */}
        {/* <h1>A Front-End Web Developer</h1> */}
       </div>
       <div className='social_wrapper'>
        <a href="mailto:trondation@gmail.com"><img src={emailIcon} alt='email icon' className='icon_image'></img></a>
        <a href="//github.com/trond240"><img src={gitIcon} alt='gitHub icon' className='icon_image'></img></a>
        <a href="https://www.linkedin.com/in/trond-makonese-05610115a/"><img src={linkIcon} alt='linkDin icon' className='icon_image'></img></a>
        <a href=''><img src={resumeIcon} alt='resume icon' className='icon_image'></img></a>
       </div>
       <About />
       <Projects />
       <Contact />
      </header>
    </main>
  );
}

export default App;
