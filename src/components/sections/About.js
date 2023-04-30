import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes'


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
position: relative;

`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
//background-color: whitesmoke;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
  width: 85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}

`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){

  min-height: 50vh;
}
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;

@media (max-width: 64em){
width: 100%;
text-align: center;
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontlg};

}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
width: 100%;
text-align: center;
font-size: ${props => props.theme.fontmd};
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};

}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
width: 100%;
text-align: center;
font-size: ${props => props.theme.fontsm};
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontsm};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};

}
`

const ButtonContainer = styled.div`
width: 80%;
display: flex;
align-self: center;
margin: 1rem auto;
text-align: center;
align-items: center;

@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
  width: 100%;
  align-self: center;
  align-items: center;

  button{
    margin: 0 auto;
    align-items: center;
    
  }

}
`

const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Box> <Carousel /> </Box>
        <Box>
          <Title>
          💚Liquidity Meme Token! #XSHIB💚
          </Title>
          <SubText>
          🚀 Astro Shiba is adding a layer of fun to liquidity on Stellar and powering the new generation of fun projects on #XLM! 🌟
          </SubText>
          <SubTextLight>
          #XSHIB token is all about boosting liquidity on Stellar by incentivizing market makers on AMM LP.
          </SubTextLight>
          <ButtonContainer>
          <ThemeProvider theme={dark}>
          <a href='https://t.me/ASHIBTOKEN' rel='noreferrer' target='_blank'>
          <Button text="JOIN OUR TELEGRAM" />
          </a>
          </ThemeProvider>
          </ButtonContainer>
          
        </Box>
      </Container>
    </Section>
  )
}

export default About