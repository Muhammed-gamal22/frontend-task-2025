import Image from "next/image"

interface CommentProps {
    comment:{
        name:string,
        stars:string[],
        date:string,
        desc:string
    }
}
const Comment = ({comment}:CommentProps) => {
    return(
        <div className="w-full flex flex-col gap-3 p-4 border-b">
            <div className="flex w-full justify-between items-center gap-2">
             <div className="flex items-center gap-2">
             <h2 className="text-[#000000] text-[14px] md:text-[20px] font-semibold">{comment.name}</h2>
             <div className="flex gap-4">
             {comment.stars.map((star)=>(
                <Image className="md:w-[24px] h-[16px] w-[16px] md:h-[24px]" src={star} width={24} height={24} alt=""/>
            ))}
             </div>
             </div>
             <span className="text-[#545454] text-[10px] md:text-[14px]">{comment.date}</span>
            </div>
            <p className="text-[#020202] text-[12px] md:ext-[16px] font-normal">{comment.desc}</p>
        </div>
    )
}
export default Comment