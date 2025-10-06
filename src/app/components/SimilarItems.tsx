"use client"
import ProductItem from "./ProductItem"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
const ITEMS=[
    {
      image:"/photo1.svg",
      type:"Dresses",
      rating:"4.9",
      desc:"J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow Stripe",
      price:"900",
      icon:{
        love:"/love-icon.svg",
        bag:"/bag-add.svg"
      }
    },
    {
        image:"/photo1.svg",
        type:"Dresses",
        rating:"4.9",
        desc:"J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow Stripe",
        price:"900",
        priceUnit:"AED",
        discount:"20%OFF",
        icon:{
            love:"/love-icon.svg",
            bag:"/bag-add.svg"
          }
  
      } ,
      {
        image:"/photo1.svg",
        rating:"4.9",
        desc:"J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow Stripe",
        price:"900",
        priceUnit:"AED",
        num:"120",
        type:"Dresses",
        icon:{
            love:"/love-icon.svg",
            bag:"/bag-add.svg"
          }
      },
      {
        image:"/photo1.svg",
        rating:"4.9",
        priceUnit:"AED",
        desc:"J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow Stripe",
        price:"900",
        num:"120",
        type:"Dresses",
        icon:{
            love:"/love-icon.svg",
            bag:"/bag-add.svg"
          }
      },
      {
        image:"/photo1.svg",
        rating:"4.9",
        priceUnit:"AED",
        desc:"J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow Stripe",
        price:"900",
        num:"120",
        type:"Dresses",
        icon:{
            love:"/love-icon.svg",
            bag:"/bag-add.svg"
          }
      },
      {
        image:"/photo1.svg",
        rating:"4.9",
        priceUnit:"AED",
        num:"120",
        type:"Dresses",
        desc:"J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow Stripe",
        price:"900",
        icon:{
            love:"/love-icon.svg",
            bag:"/bag-add.svg"
          }
      }        


]
const SimilarItems = () => {
  const [swiper,setSwiper]=useState<SwiperType | null>(null)
    return (
        <div className="py-4 ">
          <div className="w-[90%] mx-auto">
   <div className="relative mb-2">
  <Image 
    src="/layer-1.svg" 
    alt="" 
    width={98} 
    height={58} 
    className="block  md:hidden mb-2" 
  />
 <div>
 <h2 className="md:text-[24px] font-bold absolute md:static -mt-[40px] md:mt-0   text-[16px]   z-[10]">
    Similar Items
  </h2>
  <div className="h-[4px] -mt-[15px] md:mt-0 absolute md:static   z-[10] w-[40px] bg-[#BE968E]"/>
 </div>
</div>
         <div className="w-full   mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        onSwiper={(swiper)=>setSwiper(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 5, 
          },
        }}
      >
       
        {ITEMS.map((item)=>(
             <SwiperSlide>
            <ProductItem key={item.image} item={item}/>
            </SwiperSlide>
         ))}
         <div className="flex mt-[22px] justify-center gap-2">
         <div onClick={()=>swiper?.slidePrev()} className="w-[50px] cursor-pointer bg-[#E8EDF2] rounded-full h-[50px] flex items-center justify-center">
             <Image src={"/group-1.svg"} alt="" width={24} height={24}/>
          </div>
          <div onClick={()=>swiper?.slideNext()} className="w-[50px] cursor-pointer bg-[#c09a92] rounded-full h-[50px] flex items-center justify-center">
              <Image src={"/arrowRight.svg"} alt="" width={24} height={24}/>
          </div>
         </div>
      </Swiper>
        </div>
        </div>
        </div>
    )
}
export default SimilarItems