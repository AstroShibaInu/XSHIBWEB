import React from 'react'
import VID from '../assets/XSHIBVIDEO.mp4' 
import styled from 'styled-components'


const VideoContainer = styled.div`
  width: 90%;
  overflow: hidden; /* Evita el desbordamiento del contenido */

  video {
    width: 90%; /* Utiliza el 100% del ancho del contenedor */
    height: auto;
    display: block;
    margin: auto;
  }

  @media (max-width: 64em) {
    min-width: auto;
  }
`;

function CoverVideo() {
  return (
    <VideoContainer>
        <video src={VID} type='video/mp4' autoPlay controls loop  />
        
    </VideoContainer>
  )
}

export default CoverVideo