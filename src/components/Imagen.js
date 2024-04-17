import React from 'react'
import IMG from '../assets/astroshiba.png' 
import styled from 'styled-components'


const Imagen = styled.div`
  width: 90%;
  margin: auto;

  img {
    width: 90%; /* Cambiado a 100% para asegurar que la imagen no se desborde */
    height: auto;
    display: block;
    margin: auto;
  }

  @media (max-width: 64em) {
    /* Puedes ajustar esta propiedad según tus necesidades */
    min-width: auto; /* Eliminado min-width para evitar restricciones innecesarias */
  }
`;

function CoverVideo() {
  return (
    <Imagen>
        <img src={IMG} type='img' alt='Astro Shiba NFT Collection' />
    </Imagen>
  )
}

export default CoverVideo