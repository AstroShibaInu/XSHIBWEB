import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Title =  styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Televigala', cursive;
}
.text-1{
    color: #f68131;
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
margin-bottom: 5px;
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
  margin: 5px;

  button {
    width: 50%; /* Ajusta el ancho de todos los botones al 100% del contenedor */
    margin: 5px; /* Ajusta el margen de los botones según sea necesario */
  }

  @media (max-width: 48em){
    width: 150%;
    align-self: center;
    text-align: center;

    button {
      margin: 5px;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
    <Title>
        GET XSHIB
       
    </Title>
    <SubTitle>Astro Shiba is about fun and joy</SubTitle>
    <ButtonContainer>
    <a href='https://aqua.network/market/AQUA:GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA/XSHIB:GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG' rel='noreferrer' target='_blank'>
    <Button text='AQUA Rewards' />
    </a>
    </ButtonContainer>
    <ButtonContainer>
    <a href='https://obm.lumenswap.io/spot/XSHIB-GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG/XLM' rel='noreferrer' target='_blank'>
    <Button text='LumenSwap' />
    </a>
    </ButtonContainer>
    <ButtonContainer>
    <a href='https://www.stellarx.com/markets/XSHIB:GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG/native' rel='noreferrer' target='_blank'>
    <Button text='StellarX' />
    </a>
    </ButtonContainer>
    <ButtonContainer>
    <a href='https://scopuly.com/trade/XSHIB-XLM/GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG/native' rel='noreferrer' target='_blank'>
    <Button text='Scopuly' />
    </a>
    </ButtonContainer>
    <ButtonContainer>
    <a href='https://stellarterm.com/exchange/XSHIB-GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG/XLM-native' rel='noreferrer' target='_blank'>
    <Button text='StellarTerm' />
    </a>
    </ButtonContainer>
    <ButtonContainer>
    <a href='https://lobstr.co/assets/XSHIB:GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG' rel='noreferrer' target='_blank'>
    <Button text='LOBSTR' />
    </a>
    </ButtonContainer>
    
    
    </>
  )
}

export default TypeWriterText