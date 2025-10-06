import Image from "next/image"
import Slider from "./Slider"
import Comments from "./comments"

const SLIDERS=[
    {
        rating:5,
        percent:67
    },
    {
        rating:4,
        percent:15
    },
    {
        rating:3,
        percent:6
    }, 
    {
        rating:2,
        percent:3
    },
    {
        rating:1,
        percent:9
    },
]
const RatingAndReviews = ()=>{
    return(
        <div className="container mt-[22px] px-3 mx-auto">
         <div className="text-[#020202] md:text-[24px] text-[16px] font-semibold">
          <div className="relative">
          <Image  src="/layer-1.svg" alt="" width={98} height={58} 
          className="absolute block md:hidden mb-[40px] -bottom-[60px] left-0"/>
          <h2 className="md:text-[24px] z-[999999] relative  text-[16px]">Rating And Reviews</h2>
          </div>

          <div className="h-[4px] w-[40px] bg-[#BE968E]"/>
         </div>
         <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex text-center justify-center md:justify-start md:text-start gap-4">
                 <h2 className="md:text-[120px] text-[80px] font-medium">4,5</h2>
                 <span className="text-[#B0B0B0] mt-[50px] self-center md:text-[24px] text-[16px] font-semibold">/5</span>
            </div>
            <div className="flex flex-col gap-4">
                {SLIDERS.map((slider)=>(
                    <Slider key={slider.rating} rating={slider.rating} percent={slider.percent}/>
                ))}
            </div>
            <div className="hidden md:flex items-center justify-end flex-col gap-2">
                <span className="text-[#545454] md:text-[16px] text-[12px] font-normal">Total Reviews</span>
                <h2 className="md:text-[60px] text-[20px] font-semibold">3.0k</h2>
                <button className="w-[186px]  bg-[#BE968E] md:h-[56px] h-[40px] py-2 rounded-[12px] text-white flex items-center justify-center gap-2">
                     <span>Add Comment</span>
                     <Image src={"/chat01.svg"} width={24} height={24} alt=""/>
                </button>
            </div>
         </div>
         <Comments/>
        </div>
    )
}
export default RatingAndReviews