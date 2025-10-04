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
        <div className="container mx-auto">
         <div className="text-[#020202] text-[24px] font-semibold">
         <h2>Rating And Reviews</h2>
          <div className="h-[4px] w-[40px] bg-[#BE968E]"/>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4">
                 <h2 className="text-[120px] font-medium">4,5</h2>
                 <span className="text-[#B0B0B0] mt-[50px] self-center text-[24px] font-semibold">/5</span>
            </div>
            <div className="flex flex-col gap-4">
                {SLIDERS.map((slider)=>(
                    <Slider key={slider.rating} rating={slider.rating} percent={slider.percent}/>
                ))}
            </div>
            <div className="flex items-center justify-end flex-col gap-2">
                <span className="text-[#545454] text-[16px] font-normal">Total Reviews</span>
                <h2 className="text-[60px] font-semibold">3.0k</h2>
                <button className="w-[186px] bg-[#BE968E] h-[56px] py-2 rounded-[12px] text-white flex items-center justify-center gap-2">
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