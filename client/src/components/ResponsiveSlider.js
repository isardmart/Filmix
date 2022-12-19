import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { imgURL2 } from "../config";

function ResponsiveSlider({trends}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Make the swiper full-screen
      height: '100vh',
      width: '100vw',
    });
  }, []);

  const slides = trends.map((slide, i) => {
    let { backdrop_path, title, vote_average, name } = slide;
    return (
      <div key={i} className="text-center w-[100vw] h-[100vh] flex bg-white justify-center items-center">
        <img src={`${imgURL2}${backdrop_path}`} alt={title} className="block object-cover" />
        <h3 className="text-2xl font-bold text-center p-4">{title}</h3>
      </div>
    )
  });

  return (
    <div className="swiper-container h-[100vh]">
      <div className="swiper-wrapper">{slides}</div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <button onClick={() => setIndex((index + 1) % trends.length)}>Next</button>
    </div>
  );
}

export default ResponsiveSlider;
