import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperType } from "swiper/types";
import Image from 'next/image';
const ProductImages = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const images = [
        "/image1.svg",
        "/image2.svg",
        "/image1.svg",
        "/image2.svg",
      ];
      const [activeTab, setActiveTab] = useState(0);
      const handleTabClick = (index: number) => {
        setActiveTab(index);
        swiper?.slideTo(index);
      };
  return (
     
    <div>
        <div className="flex relative z-[999999] md:top-[40px] top-[50px] justify-center gap-6 mb-4">
        {images.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabClick(index)}
            className={`px-4 h-[4px] cursor-pointer w-[120px] rounded-[16px] ${
              activeTab === index
                ? "bg-[#FFFFFF] text-white"
                : "bg-[#D4D4D4] text-[#020202]"
            }`}
          />
            
         
        ))}
      </div>
    <Swiper
      
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      onSwiper={(swiper)=>setSwiper(swiper)}
      onSlideChange={(swiper)=>setActiveTab(swiper.activeIndex)}
      className="mb-4 rounded-lg"
    >
       
      {images.map((img, idx) => (
      
        <SwiperSlide className='bg-[#F5F5F5]  relative w-[169px] h-[183px]' key={idx}>
         
          <img
            src={img}
            alt={`Product ${idx}`}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          
        </SwiperSlide>
      ))}
       
  <button disabled={swiper?.isBeginning} onClick={()=>swiper?.slidePrev()} className="custom-prev 
  
  absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
  bg-[#C4C4C4] disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full">
     <Image src={"/arrow-left.svg"} alt="" width={24} height={24}/>
  </button>
  <button disabled={swiper?.isEnd} onClick={()=>swiper?.slideNext()} className="custom-next 
  absolute right-3 top-1/2 disabled:opacity-50 disabled:cursor-not-allowed -translate-y-1/2 z-10 cursor-pointer 
  bg-[#BE968E]  text-white p-2 rounded-full">
    <Image src={"/arrow-right.svg"} alt="" width={24} height={24}/>
  </button>
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
        <SwiperSlide className='bg-[#F5F5F5] border h-[169px] rounded-[24px]' key={idx}>
          <img
            src={img}
            alt={`Thumb ${idx}`}
            className="w-full   object-cover  cursor-pointer "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ProductImages