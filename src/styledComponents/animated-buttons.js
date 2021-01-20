import React, { Component } from 'react'
import './animated-buttons.css'

class AnimatedButton extends Component {
  render () {
    return (
        <button class="cybr-btn">
            Project<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">Repo</span>
            <span aria-hidden class="cybr-btn__tag">...</span>
        </button>
    )
  }
}

export default AnimatedButton