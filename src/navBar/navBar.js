import React from 'react'
import './navBar.css'

export const NavBar = () => {
    return (
        <section className='navBarButtons'>
            <button tabindex='0'>Home</button>
            <button tabindex='1'>About</button>
            <button tabindex='2'>Projects</button>
            <button tabindex='3'>Contact</button>
        </section>
    )
}