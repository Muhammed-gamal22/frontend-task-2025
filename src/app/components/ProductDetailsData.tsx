import Image from 'next/image'
import React from 'react'


const Colors=[
    {name:"Red", color:"#D90202"},
    {name:"Black", color:"#000000"},
    {name:"Green", color:"#00FF00"},
    {name:"Yellow", color:"#FFFF00"},
    {name:"Purple", color:"#800080"},
]
const ProductDetailsData = () => {
    const [selectedColor, setSelectedColor] = React.useState("Red");
  return (
    <div>
        <div className='flex justify-between items-center'>
             <div className='border flex items-center justify-center border-[#BE968E] 
             text-[#BE968E] rounded-[32px] w-[82px] h-[37px]'>T-shirt</div>
             <div className='flex gap-2'>
                 <div className='border w-[48px] h-[48px] 
                 flex items-center justify-center 
                 border-[rgba(64, 64, 64, 0.1)] rounded-[8px]'>
                     <Image src="/bag-add.svg" width={24} height={24} alt=""/>
                 </div>
                 <div className='border w-[48px] h-[48px] 
                 flex items-center justify-center 
                 border-[rgba(64, 64, 64, 0.1)] rounded-[8px]'>
                     <Image src="/love2.svg" width={24} height={24} alt=""/>
                 </div>
             </div>
        </div>
      <div className='flex mt-[10px] flex-col gap-4'>
      <h2 className="text-2xl font-semibold mb-2">
    J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
    </h2>

    <p className="text-lg font-medium text-[20px] text-[rgba(2, 2, 2, 1)] mb-2">
      $300.00 <span className="line-through text-gray-400 ml-2">$350.00</span>
    </p>
    <p className="text-[12px] font-normal text-[rgba(51, 51, 51, 1)]">This price is exclusive of taxes.</p>
    <p className='font-normal mt-1 text-[14px] text-[rgba(2, 2, 2, 1)]'>Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy</p>
    <div className=' py-2 border-b border-[rgba(230, 230, 230, 1)]'/>
       <div>
        <h2 className='text-[20px] text-[#020202] font-medium'>Colors</h2>
       <div className='flex gap-4'>
        {Colors.map((color)=>(
            <div className='flex flex-col gap-1 items-center cursor-pointer'>
                 <div onClick={()=>setSelectedColor(color.name)} key={color.name} className={`flex border ${selectedColor === color.name?"border-[#020202]":"border-transparent"} rounded-full  justify-center w-[60px] h-[60px] bg-[#F4F7F9] items-center gap-2`}>
                <div className='w-[32px] h-[32px] rounded-full' style={{backgroundColor:color.color}}></div>
            </div>
            {selectedColor === color.name && <span>{color.name}</span>}
            </div>
           
        ))}
      </div>
       </div>
      </div>
      <div className='flex my-[22px] justify-between'>
         <div className='flex flex-col gap-2'>
         <div className='flex items-center gap-1'>
             <h2 className='text-[20px] font-normal'>Quantity</h2>
             <span className='text-[16px] font-normal text-[#8A8A8A] inline-block'>($300.00 for Piece)</span>
         </div>
         <div className='flex items-center gap-6'>
            <div className='w-[184px] bg-[#F5F5F5] items-center justify-center rounded-[12px] p-2 flex gap-4'>
                <div className='text-[28px] flex items-center justify-center bg-white rounded-[12px] w-[40px] h-[40px] text-[#B0B0B0] font-medium'>-</div>
                <div className='text-[28px] flex items-center justify-center bg-white rounded-[12px] w-[40px] h-[40px] text-[#333333] font-medium'>01</div>
                <div className='text-[28px] flex items-center justify-center bg-white rounded-[12px] w-[40px] h-[40px] text-[#000000] font-medium'>+</div>
            </div>
            <h2 className='text-[24px] text-[#020202] font-medium'>$300.00</h2>
         </div>
         </div>
         <div className='w-[234px] h-[56px] cursor-pointer bg-[#BE968E] text-white self-end rounded-[12px] flex items-center justify-center gap-2'>
            <span>Add To Cart</span>
            <Image src="/shopping-bag-red.svg" width={24} height={24} alt=""/>
         </div>
      </div>
    

    
    
  </div>
  )
}

export default ProductDetailsData