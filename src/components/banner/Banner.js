import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Banner.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='banner__img'>Slide 1</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 2</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 3</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 4</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 5</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 6</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 7</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 8</SwiperSlide>
        <SwiperSlide className='banner__img'>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Banner
