import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { imgURL } from "../config";

export default function App({trends}) {
const [length,setLength]=useState (0)

const display =(movie)=>{
  if (movie){
  let {title,name,poster_path}=movie;
  return(
    <div className='h-[100vh]'>
      <h1>{title||name}</h1>
      <img src={imgURL+poster_path}></img>
    </div>
  )
  }
}

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="swiper">
        <SwiperSlide>{display(trends[0])}</SwiperSlide>
        <SwiperSlide>{display(trends[1])}</SwiperSlide>
        <SwiperSlide>{display(trends[2])}</SwiperSlide>
        <SwiperSlide>{display(trends[3])}</SwiperSlide>
        <SwiperSlide>{display(trends[4])}</SwiperSlide>
        <SwiperSlide>{display(trends[5])}</SwiperSlide>
        <SwiperSlide>{display(trends[6])}</SwiperSlide>
        <SwiperSlide>{display(trends[7])}</SwiperSlide>
        <SwiperSlide>{display(trends[8])}</SwiperSlide>
        <SwiperSlide>{display(trends[9])}</SwiperSlide>
        <SwiperSlide>{display(trends[10])}</SwiperSlide>
        <SwiperSlide>{display(trends[11])}</SwiperSlide>
        <SwiperSlide>{display(trends[12])}</SwiperSlide>
        <SwiperSlide>{display(trends[14])}</SwiperSlide>
        <SwiperSlide>{display(trends[15])}</SwiperSlide>
        <SwiperSlide>{display(trends[16])}</SwiperSlide>
        <SwiperSlide>{display(trends[17])}</SwiperSlide>
        <SwiperSlide>{display(trends[18])}</SwiperSlide>
        <SwiperSlide>{display(trends[19])}</SwiperSlide>
      </Swiper>
    </>
  );
}
