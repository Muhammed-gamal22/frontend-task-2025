"use client"
import ProductImages from "./ProductImages";
import ProductDetailsData from "./ProductDetailsData";
import Image from "next/image";
const ProductDetails = ()=>{ 
    return(
        <div>
             <div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat w-full h-[284px]">
  <div className="h-full flex items-center justify-center bg-[rgba(255,255,255,0.9)]">
    <div className="bg-[url('/product-details.svg')] flex justify-center mt-[80px] bg-contain bg-no-repeat h-[120px] w-[628px]">
      <h2 className="md:text-[32px] text-[20px] font-semibold mt-[20px]">Product Details</h2>
    </div>
  </div>
</div>
         <div className="container mx-auto">
         <div className="h-[56px] px-4 flex items-center  rounded-[16px] mt-4 bg-[#ececec66]">
              <span className="md:text-[16px] text-[12px] font-medium">Home</span>
              <span>
                <Image  src="/arrow-r.svg" alt="" width={24} height={24}/>
              </span>
              <span className="md:text-[16px] text-[12px] font-medium">Our Category</span>
              <span>
                <Image src="/arrow-r.svg" alt="" width={24} height={24}/>
              </span>
              <span className="md:text-[16px] text-[12px] text-[#8A8A8A] font-medium">Product Details</span>
        </div>
        <div className="grid grid-cols-1   md:grid-cols-2 gap-16 p-6">
       <ProductImages/>
       <ProductDetailsData/>
         </div>
    </div>
        </div>
    )
}
export default ProductDetails