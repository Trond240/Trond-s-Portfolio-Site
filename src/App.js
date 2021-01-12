import logo from './logo.svg';
import './App.css';
import image from './image-of-trond.jpeg'

function App() {
  return (
    <div className="App">
      <header className='main-page'>
       <h1>Hello, I'm <span>Trond Makonese</span></h1>
       <img src={image} alt="Photo of Trond" className="main_image"></img>
       <h1>A Front-End Web Developer</h1>
       <div className='social_wrapper'>
        <a href="mailto:trondation@gmail.com">Email</a>
        <a href="//github.com/trond240">Git Hub</a>
        <a href="https://www.linkedin.com/in/trond-makonese-05610115a/">LinkDin</a>
        <a href=''>Resume</a>
       </div>
      </header>
    </div>
  );
}

export default App;
