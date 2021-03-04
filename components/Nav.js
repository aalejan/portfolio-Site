import React from 'react'
import './Nav.css'
import styled from 'styled-components'

const Nav = () => {
    return (
        <div>
            <header className="main-header">
                <nav>
                    <ul className="nav-items">
                        <li className="nav-item"><NavLink href="#AboutMe">About Me</NavLink></li>
                        <li className="nav-item"><NavLink href="#Projects">Projects</NavLink></li>
                        <li className="nav-item"><NavLink href="#ContactMe">Skills</NavLink></li>
                        <li className="nav-item"><NavLink href="#ContactMe">Contact Me</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

const NavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #8D8745;

`

export default Nav
