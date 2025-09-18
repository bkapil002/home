import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import services from "./Image/services.png" 

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fafafd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  color: #20318c;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 32px;
`;

const StyledSwiper = styled(Swiper)`
  width: 80vw;
  max-width: 900px;
  height: 650px;
  
  .swiper-pagination-bullets {
    bottom: 20px;
  }
`;

const SlideContent = styled.div`
  background: #ECECEC;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 12px #0002;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 32px;
`;

const RequirementTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.13em;
  color: #43424c;
  margin: 18px 0 15px 0;
`;

const RequirementText = styled.p`
  text-align: justify;
  font-size: 10px;
  color: #636363;
  line-height: 1.5;
`;

const Img = styled.img`
  width: 80%;
  max-width: 320px;
  margin-bottom: 24px;
  margin-top :40px
`;

const Button = styled.button`
  margin-top: 38px;
  background: #2A2A72;
  color: #fff;
  border-radius: 100px;
  border: none;
  font-size: 12px;
  padding: 14px 38px;
  cursor: pointer;
  box-shadow: 0 2px 8px #20318c44;
  transition: background 0.2s;
  &:hover {
    background: #16236b;
  }
`;

const SLIDES = [
  {
    img: services,
    title: "REQUIREMENT",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: services,
    title: "REQUIREMENT",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: services,
    title: "REQUIREMENT",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: services,
    title: "REQUIREMENT",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: services,
    title: "REQUIREMENT",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },

];

export default function ThreeDSlider() {
  return (
    <Container>
      <h1 className="text-[50px] text-right text-[#2A2A72]">Services by Samzara</h1>
      <Subtitle>Post your post for millions of Addicts</Subtitle>
      <StyledSwiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 60,
          depth: 220,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
      >
        {SLIDES.map((slide, idx) => (
          <SwiperSlide key={idx} style={{ width: "400px" }}>
            <SlideContent>
              <Img src={slide.img} alt="People" />
              <RequirementTitle>{slide.title}</RequirementTitle>
              <div className="w-30 h-[2px] rounded-3xl -mt-2 mb-3 bg-[#f86925] "></div>
              <RequirementText>{slide.text}</RequirementText>
            </SlideContent>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <Button>Make your first Post</Button>
    </Container>
  );
}
