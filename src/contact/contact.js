import React from 'react'
import './contact.css'
import linkIcon from '../linkDin.jpeg'
import resumeIcon from '../resume.jpeg'
import gitIcon from '../gitHub.png'
import emailIcon from '../email.jpeg'

export const Contact = () => {
    return (
        <section className='contact_section' id='Contact-section'>
            <h1 className='contact_message'>Please Feel Free to Contact me for work, suggestions, or networking</h1>
            <h2>Trond Makonese</h2>
            <h2>Denver, CO</h2>
            {/* <a rel="noopener noreferrer" aria-label="send email" href="mailto: trondation@gmail.com" target="_blank"><p class="about-text email-text">trondation@gmail.com</p></a> */}
            <div className='social_wrapper'>
                <a href="mailto:trondation@gmail.com"><img src={emailIcon} alt='email icon' className='icon_image'></img></a>
                <a href="//github.com/trond240"><img src={gitIcon} alt='gitHub icon' className='icon_image'></img></a>
                <a href="https://www.linkedin.com/in/trond-makonese-05610115a/"><img src={linkIcon} alt='linkDin icon' className='icon_image'></img></a>
            </div>
        </section>
    )
}