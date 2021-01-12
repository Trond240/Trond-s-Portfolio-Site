import logo from './logo.svg';
import './App.css';
import trondImage from './image-of-trond.jpeg'
import linkIcon from './linkDin.jpeg'
import resumeIcon from './resume.jpeg'
import gitIcon from './gitHub.png'
import emailIcon from './email.jpeg'




function App() {
  return (
    <div className="App">
      <header className='main-page'>
       <h1>Hello, I'm <span>Trond Makonese</span></h1>
       <img src={trondImage} alt="Photo of Trond" className="main_image"></img>
       <h1>A Front-End Web Developer</h1>
       <div className='social_wrapper'>
        <a href="mailto:trondation@gmail.com"><img src={emailIcon} alt='email icon' className='icon_image'></img></a>
        <a href="//github.com/trond240"><img src={gitIcon} alt='gitHub icon' className='icon_image'></img></a>
        <a href="https://www.linkedin.com/in/trond-makonese-05610115a/"><img src={linkIcon} alt='linkDin icon' className='icon_image'></img></a>
        <a href=''><img src={resumeIcon} alt='resume icon' className='icon_image'></img></a>
       </div>
      </header>
    </div>
  );
}

export default App;
