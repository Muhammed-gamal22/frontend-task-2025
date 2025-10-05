import Image from "next/image"
const Images=[
    "/whatsapp.svg",
    "/telegram.svg",
    "/facebook.svg",
    "/insta.svg",
    "/linkedin.svg",
    "/twitter.svg"
]
const Footer = () => {
    return (
        <div className="relative h-[669px] bg-top md:h-[323px] bg-[url('/kids.svg')]  bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
        <div className="absolute inset-0 flex md:py-8 py-2 container mx-auto">
          <div className="grid w-full px-4  grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="col-span-2 md:col-span-1">
             <Image src={"/logo.svg"} alt="logo" width={66} height={51}/>
             <p className="text-[14px] mt-4 font-medium text-[rgba(255,255,255,0.7)]">Ipsam in eos qui consequatur ab cum maxime.
                Soluta dolor quae Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam 
                in eos quconsequatur ab cum maxime.Soluta dolor quae     </p>
          </div>
          
          <div className="col-span-1">
            <h2 className="text-[24px] text-white font-semibold">Let Us Help</h2>
            <ul className="flex flex-col text-[rgba(255,255,255,0.7)] gap-4 mt-[15px]">
              <li>My Account</li>
              <li>FAQs</li>
              <li>Categories</li>
              <li>All Products</li>
            </ul>
          </div>
          <div className="col-span-1">
             <h3 className="text-[24px] text-white font-semibold">Policies</h3>
             <ul className="flex flex-col text-[rgba(255,255,255,0.7)] gap-4 mt-[15px]">
               <li>Refund Policy</li>
               <li>About Us</li>
               <li>Cancellation Policy</li>
               <li>Terms and Conditions</li>
               <li>Privacy Policy</li>
             </ul>
          
          </div>
          <div className="flex cols-span-2 md:col-span-1 flex-col w-full  gap-4">
             <h2 className="text-[24px] text-white font-semibold">Send Email</h2>
             <div className="w-[369px] flex mt-[15px] bg-white p-3 rounded-[12px]">
             <input className="w-full border border-none outline-none py-2" type="text" placeholder="Email Address"/>
              <button className="w-[135px] bg-[#BE968E] text-white 
              py-2  rounded-[12px]">Send</button>
             </div>
             <div className="mt-[15px]">
                 <h2 className="text-[16px] mb-4 font-semibold text-white">Follow Us</h2>
                  <div className="flex gap-4">
                  {Images.map((image)=>(
                    <Image className="cursor-pointer" src={image} alt="" width={24} height={24}/>
                 ))}
                  </div>
             </div>
          </div>
          </div>
        </div>
      </div>
    )
}   
export default Footer