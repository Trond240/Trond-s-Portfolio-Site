import React, { useState, useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './navBar.css'

export const NavBar = () => {

  smoothscroll.polyfill();

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
  }

  const displayNavButtons = () => {
    const navHeadings = ['Home', 'About', 'Game', 'Projects', 'Contact'];
    const navButtons = navHeadings.map(heading => {
      return <button tabIndex='0' aria-label={`${heading} section`} key={`${heading}`} onClick={() => performSmoothScroll(`${heading}`)} className='navBar-buttons'>{`${heading}`}</button>
    })
    return navButtons;
  }

  return (
    <nav>
      <div className='navBarButtons'>
        { displayNavButtons() }
      </div>
    </nav>
  );
}
