import React from 'react'
import './AboutSection.css'
import styled from 'styled-components'

const AboutSection = () => {
    return (
        <About className="about">
            <div className="description">
                <div className="title">
                    <Title>Hi, I'm Alex Alejandro</Title>
                </div>
                <div className="subtitle">

                </div>
            </div>
        </About>
    )
}

const About = styled.div `
    background-color: #659dbd;
    height: 50vh;
    margin-top: 2rem;
    display: flex;
    align-items: center;
`

const Title = styled.h2 `
 animation: title-entrance 1.5s ease-in-out
`


export default AboutSection
