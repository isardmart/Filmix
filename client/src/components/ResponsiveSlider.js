import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { imgURL } from "../config";
import { imgURL2 } from "../config";

export default function App({ trends }) {
  const smallImageQuery = window.matchMedia("(max-width: 640px)");

  const display = (movie) => {
    if (movie) {
      let { title, name, poster_path, overview,backdrop_path } = movie;
      return (
        <div >
          {smallImageQuery.matches ?
          <img src={imgURL + poster_path}></img> :
          <img src={imgURL2 + backdrop_path}></img>
          }
          <div className="bg-slate-500 absolute top-200 flex">
            <h1 className="text-red-600 font-bold">{title || name}</h1>
            <p className="white">{overview}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div >
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
    </div>
  );
}
