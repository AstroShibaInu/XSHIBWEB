import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Section = styled.section`
min-height: 80vh;
width: auto;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;

@media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};
}

`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
}
@media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{
      margin-top: 0;
    }
  }
}

`

const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
}



`

const Faq = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    
    
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end:'bottom top',
      pin: true,
      pinSpacing: false,
      scrub:true,
    })

    return () => {
      ScrollTrigger.killAll();
    };
  }, [])

  return (
    <Section ref={ref} id='faq'>
      <Title>faq</Title>
      <Container>
        <Box>
            <Accordion title='What does Astro Shiba aim to archive?'>
            Astro Shiba strives to support the Stellar network in developing innovative and highly liquid projects. <br /><br /> Our team believes that our transparency and relentless effort to drive this initiative to new heights are our main strengths. Additionally, as an XSHIB token holder, you have the opportunity to earn rewards for providing liquidity to the network.
            </Accordion>
            <Accordion title='How does the reward system for liquidity providers work?'>
            If you are a liquidity provider, all you have to do is start creating liquidity with your favorite project on Stellar using XSHIB as the pairing. The more members and funds in the pool, the greater the chance of receiving rewards.
            </Accordion>
           
        </Box>
        <Box>
            <Accordion title='When will you burn more tokens?'>
            Since the token inception, 18,487,675,986 XSHIB have been burned. Starting in April 2023, we will begin to burn XSHIB hourly in proportion to the rewards distributed to liquidity providers. As a passionate XSHIB enthusiast, you too can contribute by adding your fair share of XSHIB to the token burn.
            <br/> <br/>
            XSHIB BURN WALLET:<br/>
            <a href='https://stellar.expert/explorer/public/account/GB7FQ6XY3NYPBSWJSIWN76BFAI2T5KNUUXIJG5LU26YXO6AODL3SRDOG' target='_black' >GB7FQ6XY3NYPBSWJSIWN76BFAI2T5KNUUXIJG5LU26YXO6AODL3SRDOG</a>
            </Accordion>
            <Accordion title='Why is XSHIB considered an AQUA meme?'>
            We are avid supporters of technological revolutions, and it's widely recognized that one of the standout projects on the Stellar network is Aqua. It's a remarkable initiative that facilitates liquidity creation within the network. However, presently, there are relatively few native Stellar projects incorporated in the AQUA rewards system. That's why we are delighted to contribute to the community's efforts by offering incentives for the participants.
            </Accordion>
        </Box>

      </Container>
    </Section>
  )
}

export default Faq