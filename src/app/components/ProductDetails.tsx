"use client"
import ProductImages from "./ProductImages";
import ProductDetailsData from "./ProductDetailsData";
const ProductDetails = ()=>{ 
    return(
        <div>
              <div className="bg-[url('/bg.jpg')]  bg-cover  h-[284px]">
             <div className="h-full flex items-center justify-center bg-[rgba(255,255,255,0.9)]">
                <div className="bg-[url('/product-details.svg')] flex justify-center mt-[80px] bg-contain bg-no-repeat h-[120px] w-[628px]">
                <h2 className="text-[32px] font-semibold mt-[20px]">Product Details</h2>
                </div>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
       <ProductImages/>
       <ProductDetailsData/>
    </div>
        </div>
    )
}
export default ProductDetails