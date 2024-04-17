import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/XSHIBNFT (1).png'
import img2 from '../assets/Nfts/XSHIBNFT (2).png'
import img3 from '../assets/Nfts/XSHIBNFT (3).png'
import img4 from '../assets/Nfts/XSHIBNFT (4).png'
import img5 from '../assets/Nfts/XSHIBNFT (5).png'
import img6 from '../assets/Nfts/XSHIBNFT (6).png'
import img7 from '../assets/Nfts/XSHIBNFT (7).png'
import img8 from '../assets/Nfts/XSHIBNFT (8).png'
import img9 from '../assets/Nfts/XSHIBNFT (9).png'
import img10 from '../assets/Nfts/XSHIBNFT (10).png'
import img11 from '../assets/Nfts/XSHIBNFT (11).png'
import img12 from '../assets/Nfts/XSHIBNFT (12).png'
import img13 from '../assets/Nfts/XSHIBNFT (13).png'
import img14 from '../assets/Nfts/XSHIBNFT (14).png'
import img15 from '../assets/Nfts/XSHIBNFT (15).png'
import img16 from '../assets/Nfts/XSHIBNFT (16).png'








const Container = styled.div`
width: 25vw;
height: 70vh;
display: flex;

@media (max-width: 70em){
  height: 60vh;
}

@media (max-width: 64em){
  height: 50vh;
  width: 30vw;
}
@media (max-width: 48em){
  height: 50vh;
  width: 40vw;
}
@media (max-width: 30em){
  height: 45vh;
  width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
    display: flex;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    
}


`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:1500,
            disableOnInteraction:false,

        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay, EffectCards]}
        navigation={true}
        effect={"cards"}
        className="mySwiper"
      >
        <SwiperSlide>   <img src={img1} alt='Astro Shiba NFT Collection' />    </SwiperSlide>
        <SwiperSlide>   <img src={img2} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img3} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img4} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img5} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img6} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img7} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img8} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img9} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img10} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img11} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img12} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img13} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img14} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img15} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
        <SwiperSlide>   <img src={img16} alt='Astro Shiba NFT Collection' />     </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel