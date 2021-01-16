import React, { useState, useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './navBar.css'

export const NavBar = () => {

  smoothscroll.polyfill();

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
  }

  const displayNavButtons = () => {
    const navHeadings = ['Home', 'About', 'Projects', 'Contact'];
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

{/* <div ref={mobileNavRef} className='mobile-nav-container'>
<button onClick={onHamburgerClick} aria-label='toggle menu visibility' className={ !mobileNavVisible ? `hamburger-button ${hamburgerBtnTurnLeft}` : 'hamburger-button-active' }></button>
<div className={ mobileNavVisible ? 'mobile-menu animate-slide-in' : `${animateClass}`}>
  { displayNavButtons() }
</div>
</div> */}

// const onHamburgerClick = () => {
//     if (mobileNavVisible) {
//       setHamburgerBtnTurnLeft('hamburger-button-turn-left')
//       setMobileNavVisible(false);
//       setAnimateClass('mobile-menu animate-slide-out');
//       setTimeout(() => {
//         setAnimateClass('hidden');
//       }, 800);
//     } else {
//       setMobileNavVisible(true);
//     }
//   }