import React from 'react'
import Card from './Card'
import CoinHub from '../images/CoinHub.png'
import styled from 'styled-components'
import StarWars from '../images/StarWars.png'

const ProjectsSection = () => {
    return (
        <Projects id="Projects">
        <h2>Projects</h2>
        <Cards >
            <Card 
            description="Access to over 100 different crypto currencies and some exchanges to trade crypto on!" 
            img={CoinHub} 
            title="CoinHub" 
            code="https://github.com/aalejan/crypto-app"
            />
            <Card 
            description="This App allows you to enter any text you want and have it translated into the language of your favorite Star Wars characters!!" 
            img={StarWars} 
            title="Star Wars Translator"
            code="https://github.com/aalejan/Star-Wars-Translator-App"
            />
        </Cards>
        </Projects>
       
    )
}

const Projects = styled.div`
padding: 2rem;
background-color: #bfefd2;
    h2{
        font-size: 4rem;
    font-weight: 500;
    padding-left: 5rem;
    padding-left: 5rem;
    text-align: center; 
    }

`

const Cards = styled.div`
margin: 4rem;
display: flex;
justify-content: space-evenly;
`

export default ProjectsSection
