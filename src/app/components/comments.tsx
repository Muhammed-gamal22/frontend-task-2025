import Comment from "./comment"
const COMMENTS=[
    {
        id:1,
        name:"John Doe",
        stars:["/star.svg","/star.svg","/star.svg","/star.svg","/star.svg"],
        date:"4 months ago",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:2,
        name:"John Doe",
        stars:["/star.svg","/star.svg","/star.svg","/star.svg","/star.svg"],
        date:"4 months ago",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."   
    },
    {
        id:3,
        name:"John Doe",
        stars:["/star.svg","/star.svg","/star.svg","/star.svg","/star.svg"],
        date:"4 months ago",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."   
    },
    {
        id:4,
        name:"John Doe",
        stars:["/star.svg","/star.svg","/star.svg","/star.svg","/star.svg"],
        date:"4 months ago",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."   
    },
 
]
const Comments= ()=>{
    return(
        <div className="w-full mt-[16px]">
            {COMMENTS.map((comment)=>(
                <Comment key={comment.id} comment={comment}/>
            ))}
             <div className="flex justify-center items-center mt-[24px]">
             <button className="rounded-[12px] cursor-pointer text-[14px] mx-auto text-[#BE968E] font-semibold bg-[#f5f5f5] h-[56px] w-[207px] flex items-center justify-center gap-2">View More Comments</button>
             </div>
        </div>
    )
}
export default Comments