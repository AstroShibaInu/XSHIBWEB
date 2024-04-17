import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Btn from '../Button';
import getStellarBalance from '../stellarBalance';

const Section = styled.section`
  min-height: 100vh;
  background-color: #C8DDBB;
  color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  overflow-x: hidden;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 90%; /* Cambiado a 90% para reducir el espacio a los lados */
    overflow-x: hidden;

    & > *:last-child {
      width: 90%;
    }
  }

  @media (max-width: 40em) {
    width: 95%; /* Cambiado a 95% para reducir el espacio a los lados */
    & > *:last-child {
      width: 90%;
    }
  }
`;


const Infotoken = styled.div`
  overflow-x: hidden; 
  max-width: 90%;
  min-width: 300px;
  max-height: 90%;
  min-height: 200px;
  width: 90%;
  height: auto;
  display: flex;
  margin-bottom: 1rem;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  

  @media (max-width: 40em) {
    min-height: 50vh;
    
  }
`;

const Box = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Box2 = styled.div`
  font-size: ${props => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: #004E64;
  align-self: flex-end;
  justify-content: center;
  

  @media (max-width: 64em) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontlg};
  }
`;

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

  @media (max-width: 64em) {
    width: 80%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }
}`;

const SubTitle2 = styled.h3`
  font-size: ${props => props.theme.fontlg};
  color: #f68131;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  height: 90%;
  align-self: flex-end;
  margin: 1rem auto;
  text-align: justify;
  overflow-x: hidden;

  @media (max-width: 64em) {
    width: 80%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }
}`;


function Tokeninfo() {
  const [xshibBalance, setXshibBalance] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Dirección del wallet de Stellar que deseas consultar
  const walletAddress = 'GB7FQ6XY3NYPBSWJSIWN76BFAI2T5KNUUXIJG5LU26YXO6AODL3SRDOG';
  const assetCode = 'XSHIB';

  useEffect(() => {
    getStellarBalance(walletAddress, assetCode)
    .then(balance => {
      console.log('XSHIB Balance:', balance);
      setXshibBalance(balance);
    })
    .catch(error => {
      console.error('Error al obtener el saldo:', error.message);
    });
}, [walletAddress]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  console.log('XSHIB Balance State:', xshibBalance);

  
  

  return (
    <Section id='tokeninfo'>
      <Container>
        <Box>
          <Infotoken>
            <iframe
              src="https://stellar.expert/widget/public/asset/summary/XSHIB-GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG"
              title="Descripción única del iframe"
              width='100%'
              height='600px'
              onLoad={handleIframeLoad}
              style={{ display: iframeLoaded ? 'block' : 'none' }}
            ></iframe>
          </Infotoken>
          
            <Btn
              text='View on Stellar Expert'
              link='https://stellar.expert/explorer/public/asset/XSHIB-GCN23IFNJOXUVS6WHGTSBALWXPMH7GSP5VEXA7V4PTPBR2ZFGTAYGDOG'
            />
          
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
          
          
          
            <Btn
              text='BURN WALLET'
              link='https://stellar.expert/explorer/public/account/GB7FQ6XY3NYPBSWJSIWN76BFAI2T5KNUUXIJG5LU26YXO6AODL3SRDOG'
            />
            
          
          
          {xshibBalance !== null && (
        <SubTitle2>
          <p>{xshibBalance} <br/> XSHIB have been burned so far.</p>
        </SubTitle2>
      )}
        
        </Box>
      </Container>
     
    </Section>
  );
}

export default Tokeninfo;
