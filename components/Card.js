import React from 'react'
import styled from 'styled-components'
import './Card.css'
import CoinHubImg from '../images/CoinHub.png'

const Card = ({description, img, title}) => {
    return (
        <div>
            <ProjectCard className="card">
                <img src={img} alt=""/>
                <div className="card-info">
                    <h4>{title}</h4>
                    <p>{description}</p>  
                </div>
          
            </ProjectCard>
        </div>
    )
}

const ProjectCard = styled.div`
background-color: white;
width: 300px;
border-style: none;
border-radius: 4px;
flex: 1 1 25rem;
font-size: 1.5rem;
box-shadow: 3px 3px 5px 6px #3b5646;
position: relative;
transition: transform 250ms ease-in-out;
height: 300px;
img{
    width: 300px;
    border-radius:4px;
}
.card-info{
    padding: 1.2rem;
    h4{
        text-align: center;
        padding-bottom: 1rem;
        font-size: 1.75rem;
    }
}

&:hover{
    transform: scale(1.1);
}

`

export default Card
