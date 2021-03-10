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
                I am an eager and ambitious Web Developer ready to start a career and bring my passion to a full time role.
                </SubTitle>
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
