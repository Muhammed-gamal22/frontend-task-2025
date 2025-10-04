import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductImages = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images = [
        "/apps.svg",
        "/product-details.svg",
        "/arrow-right.svg",
        "/bg.jpg",
      ];
  return (
     
    <div>
       
    <Swiper
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#000",
      }}
      navigation
      
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mb-4 rounded-lg"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={`Product ${idx}`}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="rounded-lg"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={`Thumb ${idx}`}
            className="w-full h-[100px] object-cover rounded-md cursor-pointer border"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ProductImages