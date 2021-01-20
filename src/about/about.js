import React from 'react'
import './about.css'
import trondImage from '../image-of-trond.jpeg'


export const About = () => {
    return (
        <section className='about_section' id='About-section'>
            <div className='image_div'>
                <img src={trondImage} alt="Photo of Trond" className="headshot_image"></img>
            </div>
            <div className='about_text_container'>
                <h2 className='about_text'>Greetings!</h2>
                <p className='about_text'>
                    My name is Trond Makonese, I am a hip hop dancer turned javaScript developer. Dancing and coding a more alike then we know. In dance we take a bunch of moving peices to make one master peice as I do when I am creating a new project. I am passionate about creating projects with a solid foundation in test driven developmentand object oriented programming while using the agile work metholodgy.

                </p>
            </div>        
        </section>
    )
}