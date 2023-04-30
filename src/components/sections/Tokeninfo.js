import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


const Section = styled.section`

min-height: 100vh;
width: 100vw;
background-color: #C8DDBB;
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
//background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;

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

const Infotoken = styled.div`

overflow: hidden ;
max-width:100%;
min-width:300px;
max-height:100%;
min-height:200px;
width: 90%;
height: auto;
display: flex;
margin-bottom: 1rem;
border-radius: 50px;
justify-content: center;
align-items: center;

@media (max-width: 40em){

min-height: 50vh;
}

`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){

min-height: 50vh;
}
`

const Box2 = styled.div`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
width: 80%;
color: #004E64;
align-self: flex-end;
justify-content: center;
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

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
color: #00A5CF;
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
height: 90%;
align-self: flex-end;
margin: 1rem auto;
text-align: justify;

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

const ButtonContainer = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
  width: 100%;

  button{
    margin: 0 auto;
  }

}
`



function Tokeninfo() {
  return (
    <Section id='tokeninfo'>
        <Container>
            <Box>
            <Infotoken>
            <iframe src="https://stellar.expert/widget/public/asset/summary/XSHIB-GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG" width='100%' height='500px'></iframe>
            </Infotoken>
            <ButtonContainer>
            <a href='https://stellar.expert/explorer/public/asset/XSHIB-GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG' rel='noreferrer' target='_blank'>
            <Button text='View on Stellar Expert' />
            </a>
            </ButtonContainer>
            </Box>
            <Box>
            <Box2>
            funny meme, <br />
            big dreams.
            </Box2>
            <SubTitle>
            The XSHIB token was created on 02/2023 with the intention of helping the stellar network maintain liquidity, rewarding liquidity providers of different pairs. Think of Astro Shiba as an AQUA MEME, funnier, friendlier, and fairer.
            </SubTitle>
            <SubTitle>
            1,000,000,000,000 XSHIB asset (fixed) have been minted at the genesis and will be vested over the course of 10 years.
            </SubTitle>
            <ButtonContainer>
            <a href='https://stellar.expert/explorer/public/account/GB7FQ6XY3NYPBSWJSIWN76BFAI2T5KNUUXIJG5LU26YXO6AODL3SRDOG' rel='noreferrer' target='_blank'>
            <Button text='BURN WALLET' />
            </a>
            </ButtonContainer>
            </Box>
            
            
        </Container>
    </Section>
  )
}

export default Tokeninfo