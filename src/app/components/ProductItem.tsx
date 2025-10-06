import React from 'react'
import Image from 'next/image'

const ProductItem = ({item}:any) => {
  return (
     <div className='h-[384px]'>
       <div className='border p-3 border-[rgba(0, 0, 0, 0.05)] rounded-[20px]'>
         <div className='flex items-center justify-between'>
          {item.discount && <div className='w-[74px] rounded-md rou text-[#BE968E] px-2 border border-[#4040401A] h-[30px] flex items-center justify-center'>
            <span>{item.discount}</span>
          </div>}
         <div className='flex gap-2  w-full items-center justify-end'>
              <div className='border w-[36px] h-[36px] 
              flex items-center justify-center 
              border-[rgba(255, 255, 255, 0.3)]
              rounded-[8px]
              '>
              <Image src={item.icon.bag} alt="" width={24} height={24}/>
              </div>
              <div className='border gap-2 w-[36px] h-[36px] 
              flex items-center justify-center 
              border-[rgba(255, 255, 255, 0.3)]
              rounded-[8px]'>
              <Image src={item.icon.love} alt="" width={24} height={24}/>
              </div>
        </div>
         </div>
        <Image className='mx-auto' src={item.image} alt="" width={198} height={198}/>
         
    </div>
    <div>
            <div className='flex items-center py-2 justify-between'>
            <span className='text-[12px] text-[rgba(84, 84, 84, 1)]'>{item.type}</span>
            <div className='flex items-center gap-2'>
               <Image alt="" src={"/star.svg"} width={16} height={16}/>
               <span className='text-[12px] font-bold text-[rgba(2, 2, 2, 1)]'>{item.rating}</span>
               <span className='text-[rgba(84, 84, 84, 1)] text-[10px]'>({item.num})</span>
            </div>
            </div>
            <p className='text-[14px] font-medium text-[rgba(2, 2, 2, 1)]'>{item.desc}</p>
            <div className='flex justify-between mt-[10px] w-full'>
            <p className='text-[14px] font-medium text-[rgba(2, 2, 2, 1)]'>
              <span>{item.priceUnit}</span>
              <span>{item.price}</span>
            </p>
            <div className='flex gap-2'>
              <div className='w-[16px] h-[16px] bg-[#be968e] rounded-[8px]'></div>
              <div className='w-[16px] h-[16px] bg-[#363535] rounded-[8px]'></div>
              <div className='w-[16px] h-[16px] bg-[#ECECEC] rounded-[8px]'></div>
            </div>
            </div>
         </div>
     </div>
  )
}

export default ProductItem