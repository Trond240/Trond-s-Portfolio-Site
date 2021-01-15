import React from 'react'
import './about.css'
import trondImage from '../image-of-trond.jpeg'


export const About = () => {
    return (
        <section className='about_section' id='About-section'>
            <div className='image_div'>
                <img src={trondImage} alt="Photo of Trond" className="main_image"></img>
            </div>
            <div className='about_text_container'>
                <h2 className='about_text'>Greetings!</h2>
                <p className='about_text'>This will be some text about me and my journey with code</p>
            </div>        
        </section>
    )
}