import React from 'react'
import './AboutSection.css'
import styled from 'styled-components'

const AboutSection = () => {
    return (
        <About className="about">
            <div className="description">
                <div className="title">
                    <Title>Hi, I'm Alex</Title>
                </div>
                <SubTitle className="subtitle">
                I am an eager and ambitious software developer ready to start a career as a 
                Front End Developer.
                </SubTitle>
            </div>
        </About>
    )
}

const About = styled.div `
    background-color: #659dbd;
    height: 100vh;
    width: 100vw;
    margin-top: 2rem;
    display: flex;
    align-items: center;
`

const Title = styled.h2 `
 animation: title-entrance 1.5s ease-in-out;
 padding-left: 5rem;

`

const SubTitle = styled.div `
    padding-left: 5rem;
    margin-top: 1rem;
    font-size: 2rem;
    color:#252424;
    animation: title-entrance 1.5s ease-in-out;
    animation-delay:0.2s;
`


export default AboutSection
