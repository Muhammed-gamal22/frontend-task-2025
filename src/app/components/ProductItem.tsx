import React from 'react'
import Image from 'next/image'

const ProductItem = ({item}:any) => {
  return (
    <div>
        <div className='flex items-center justify'>
             <Image src={"/bag-add.svg"} alt="" width={24} height={24}/>
             <Image src={"/love.svg"} alt="" width={24} height={24}/>
        </div>
        <Image src={item.image} alt="" width={198} height={198}/>
         <div>
            <span>{item.type}</span>
         </div>
    </div>
  )
}

export default ProductItem