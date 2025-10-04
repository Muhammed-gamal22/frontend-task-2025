import Image from 'next/image'
import React from 'react'

const Slider = ({rating,percent}:{rating:number,percent:number}) => {
  return (
    <div className='flex items-center gap-4'>
        <Image src="/star.svg" width={24} height={24} alt=""/>
        <span>{rating}</span>
        <div className='w-[363px] h-[6px] rounded-md bg-[#E6E6E6]'>
           <div style={{width:`${percent}%`}} className={`bg-[#BE968E] h-[6px] rounded-md`}/>
        </div>
        <span className='text-[20px] font-medium'>{percent}%</span>
    </div>
  )
}

export default Slider