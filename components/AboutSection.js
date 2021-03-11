import React from 'react'
import './AboutSection.css'
import styled from 'styled-components'

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <About className="about">
            <div className="description">
                <div className="title">
                    <Title>Hi, I'm Alex</Title>
                </div>
                <SubTitle className="subtitle">
                I am an eager and ambitious Web Developer ready to start a career and bring my passion to a full time role.
                </SubTitle>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/alexander-alejandro/"><FaLinkedin size= '3rem' /></a>
                    <a href="https://github.com/aalejan"><FaGithub size= '3rem' /></a>
                </div>
            </div>
        </About>
    )
}

const About = styled.div `
    background-color:#caebf2 ;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    .social-links{
        animation: title-entrance 1.5s ease-in-out;
        margin-top: 1rem;
        width: 9vw;
        padding-left:5rem;
        display: flex;
        justify-content: space-between;
    }
    a{
        color:black;
    }
`

const Title = styled.h2 `
 animation: title-entrance 1.5s ease-in-out;
 padding-left: 5rem;
 color:black;
 font-weight: 800;
`

const SubTitle = styled.div `
    padding-left: 5rem;
    margin-top: 1rem;
    font-size: 2rem;
    color:black;
    animation: title-entrance 1.5s ease-in-out;
    animation-delay:0.2s;
`


export default AboutSection
