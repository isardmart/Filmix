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
      <div key={i} className="swiper-slide bg-gray-500">
        <img src={`${imgURL2}${backdrop_path}`} alt={title} className="h-full w-full object-cover" />
        <h3 className="text-2xl font-bold text-center p-4">{title}</h3>
      </div>
    )
  });

  return (
    <div className="swiper-container h-full w-full">
      <div className="swiper-wrapper">{slides}</div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      {/* Add a button to change the image */}
      <button onClick={() => setIndex((index + 1) % trends.length)}>Next</button>
    </div>
  );
}

export default ResponsiveSlider;
