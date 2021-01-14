import React from 'react';
import './projects.css'
import rancid1 from './images/rancid1.png'
import rancid2 from './images/rancid2.png'
import rancid3 from './images/rancid3.png'
import space1 from './images/space1.gif'
import space2 from './images/space2.gif'
import space3 from './images/space3.gif'
import rad1 from './images/rad1.png'
import rad2 from './images/rad2.png'
import rad3 from './images/rad3.png'
import dungeon1 from './images/dungeon1.jpeg'
import dungeon2 from './images/dungeon2.jpeg'
import dungeon3 from './images/dungeon3.jpeg'

export const Projects = () => {
    return (
    <section className='project_container' id='projects-section'>
       <h1 className='heading'>Projects</h1>
       <div className='project_div'>
        <h1>Rad Rentals</h1>
        <a href='https://github.com/Trond240/Mod_3_V-RAD_APP'><button className='repo_button'><h3>Project Repo</h3></button></a>
        <p>This project was the first group project for Module 3 at Turing School of Software And Design.<br>
        </br>
        The goal of this project was to get familiar with several new technologies used in React Framework. The main focus was on fetching data from a server and displaying the data on the DOM. Every component had to be tested using Jest and React Testing Library.</p>
        <p>React, Jest, React Router, React Testing Library</p>
        <img src={rad1} className='project_img' alt='img-1'></img>
        <img src={rad2} className='project_img' alt='img-2'></img>
        <img src={rad3} className='project_img' alt='img-3'></img>
       </div>
       <div className='project_div'>
        <h1>Space Age</h1>
        <a href='https://github.com/Trond240/Space-Age'><button className='repo_button'><h3>Project Repo</h3></button></a>
        <p>Space Age is an app that allows you to enter your name and a birthdate. An image that was taken on that date will render to the page in the form of a card with additional information in regards to the image. You can also view more images that were taken the week of your birthday. On top of viewing your weeks worth of pictures/ videos, you can also view the description given to each as well as favorite the cards you love the most! We used vue.js to create this application.</p>
        <p>Vue.js, Vue Testing Suite</p>
        <img src={space1} className='project_img' alt='img-1'></img>
        <img src={space2} className='project_img' alt='img-2'></img>
        <img src={space3} className='project_img' alt='img-3'></img>
       </div>
       <div className='project_div'>
        <h1>Untitled Dungeon Crawler</h1>
        <a href='https://github.com/Trond240/Dungeon-Crawler'><button className='repo_button'><h3>Project Repo</h3></button></a>
        <p>Untitled Dungeon Crawler is a website dedicated to recreating the experience of an old dungeon crawler/adventure RPG game, in your browser. There is also an custom built API which holds the NPCs(Non-player characters) and sends NPC's info so that the game can project their stats.</p>
        <p>React, React Hooks, Jest, React Testing Library, Heruku, Travis CI </p>
        <img src={dungeon1} className='project_img' alt='img-1'></img>
        <img src={dungeon2} className='project_img' alt='img-2'></img>
        <img src={dungeon3} className='project_img' alt='img-3'></img>
       </div>
       <div className='project_div'>
        <h1>Rancid Tomatillos</h1>
        <a href='https://github.com/Trond240/rancid-tomatillos-app'><button className='repo_button'><h3>Project Repo</h3></button></a>
        <p>Rancid Tomatillos is an application that allows users to browse movies, log into the server, rate movies, and view additional details about each movie. It is a showcase of our team's ability to work with progressively more complex React component structures. We used redux as a global store to minimize prop drilling and practice data management for large scale applications. We use React Router to navigate between pages and testes all of our synchronous and async functionality.</p>
        <p>React, Redux, React Router, React Testing Library, Jest</p>
        <img src={rancid1} className='project_img' alt='img-1'></img>
        <img src={rancid2} className='project_img' alt='img-2'></img>
        <img src={rancid3} className='project_img' alt='img-3'></img>
       </div>
    </section>
    )
}