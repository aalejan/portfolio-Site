import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <header className="main-header">
                <nav>
                    <ul className="nav-items">
                        <li className="nav-item"><a href="#AboutMe">About Me</a></li>
                        <li className="nav-item"><a href="#Projects">Projects</a></li>
                        <li className="nav-item"><a href="#ContactMe">Skills</a></li>
                        <li className="nav-item"><a href="#ContactMe">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav
