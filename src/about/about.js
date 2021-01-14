import React from 'react'
import './about.css'
import trondImage from '../image-of-trond.jpeg'


export const About = () => {
    return (
        <section className='about-section' id='about-section'>
            <div className='image_div'>
                <img src={trondImage} alt="Photo of Trond" className="main_image"></img>
            </div>
            <div className='about_text_container'>
                <h2 className='about_text'>Greetings!</h2>
                <p className='about_text'>This will be some text about me and my journey with code</p>
            </div> 
            <div className='contact_info'>
                <h3>Contact Details</h3>
                <p>Trond Makonese</p>
                <p>Denver, CO</p>
                <a rel="noopener noreferrer" aria-label="send email" href="mailto: trondation@gmail.com" target="_blank"><p class="about-text email-text">trondation@gmail.com</p></a>
            </div>           
        </section>
    )
}