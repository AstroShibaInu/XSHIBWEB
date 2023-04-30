import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button'

const Title =  styled.h2`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Televigala', cursive;
}
.text-1{
    color: #00A5CF;
}
.text-2{
    color: #7AE582;
}
.text-3{
    color: #25A18E;
}

@media (max-width: 70em){
  font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em){
  align-self: center;
  text-align: center;
}
@media (max-width: 40em){
  width: 90%;
}

`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 48em){
  align-self: center;
  text-align: center;
}

`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em){
  align-self: center;
  text-align: center;

  button{
    margin: 0 auto;
  }
}

`

const TypeWriterText = () => {
  return (
    <>
    <Title>
        Astro Shiba
        <Typewriter
        options={{
            autoStart: true,
            loop: true,

        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">XSHIB</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">Liquidity Meme</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-3">Kill The Zero!</span>')
    .pauseFor(2000)
    .deleteAll()
    .start()

  }}
/>
    </Title>
    <SubTitle>The revolution on Stellar</SubTitle>
    <ButtonContainer>
    <a href='https:\\sites.google.com/view/list-lp-rewards-xshib/inicio' rel='noreferrer' target='_blank'>
    <Button text='XSHIB Rewards' />
    </a>
    </ButtonContainer>
    
    </>
  )
}

export default TypeWriterText