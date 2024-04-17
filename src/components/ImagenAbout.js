import React from 'react'
import GIF from '../assets/XSHIBNFT.gif' 
import styled from 'styled-components'


const Imagen = styled.div`
  width: 90%;
  margin: auto;
  overflow-x: hidden;

  img {
    width: 100%; /* Cambiado a 100% para asegurar que la imagen no se desborde */
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
        <img src={GIF} type='img' />
    </Imagen>
  )
}

export default CoverVideo