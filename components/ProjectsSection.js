import React from 'react'
import Card from './Card'
import CoinHub from '../images/CoinHub.png'
import styled from 'styled-components'
import StarWars from '../images/StarWars.png'

const ProjectsSection = () => {
    return (
        <Cards >
            <Card 
            description="Access to over 100 different crypto currencies and some exchanges to trade crypto on!" 
            img={CoinHub} 
            title="CoinHub" />
            <Card 
            description="This App allows you to enter any text you want and have it translated into the language of your favorite Star Wars characters!!" 
            img={StarWars} 
            title="Star Wars Translator" />

        </Cards>
    )
}

const Cards = styled.div`
margin: 4rem;

`

export default ProjectsSection
