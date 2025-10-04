"use client"
import ProductItem from "./ProductItem"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ITEMS=[
    {
      image:"/photo1.svg",
      type:"Dresses",
    } ,
    {
        image:"/photo1.svg",
        type:"Dresses",
      } ,
      {
        image:"/photo1.svg",
        type:"Dresses",
      },
      {
        image:"/photo1.svg",
        type:"Dresses",
      },
      {
        image:"/photo1.svg",
        type:"Dresses",
      },
      {
        image:"/photo1.svg",
        type:"Dresses",
      }        


]
const SimilarItems = () => {
    return (
        <div className="py-4">
    <div className="text-[#020202] text-[24px] font-semibold">
         <h2>Similar Items</h2>
          <div className="h-[4px] w-[40px] bg-[#BE968E]"/>
         </div>
         <div className="w-full   mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
      >
       
        {ITEMS.map((item)=>(
             <SwiperSlide>
            <ProductItem key={item.image} item={item}/>
            </SwiperSlide>
         ))}
        
      </Swiper>
        </div>
        </div>
    )
}
export default SimilarItems