import React from 'react'
import './Nav.css'
import styled from 'styled-components'

const Nav = () => {
    return (
        <div>
            <header className="main-header">
                <nav>
                    <NavItems className="nav-items">
                        <li className="nav-item"><NavLink href="#AboutMe">About Me</NavLink></li>
                        <li className="nav-item"><NavLink href="#Projects">Projects</NavLink></li>
                        <li className="nav-item"><NavLink href="#Skills">Skills</NavLink></li>
                        <li className="nav-item"><NavLink href="Contact">Contact Me</NavLink></li>
                    </NavItems>
                </nav>
            </header>
        </div>
    )
}

const NavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #DAAD86;
    position: relative;
    &:hover::after{
        transform: scaleX(1);
        color: #ef8b33
    }
    &:after{
        content:'';
        position:absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: currentColor;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 250ms ease-in-out;

    }

`

const NavItems = styled.ul `
 animation: title-entrance 1.5s ease-in-out
`

export default Nav
