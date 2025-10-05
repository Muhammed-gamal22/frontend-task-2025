"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LINKS=[
    {name:"Home", href:"",icon:"/home04.svg"},
    {name:"Our Category ", href:"",icon:"/apps.svg"},
    {name:"About Us", href:"",icon:"/interactive.svg"},
    {name:"Contact Us", href:"",icon:"/idcard.svg"},
    {name:"FAQs", href:"",icon:"/chat-information.svg"},
]

const Header = ()=>{
    const [openMenu,setOpenMenu] = useState(false)
    return(
         <div style={{
            boxShadow:"0px 0px 52px -24px rgba(0, 0, 0, 0.25)"
         }} className=" justify-center px-4 py-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex justify-between md:justify-start items-center gap-12">
                 <Image src="/Logo.svg" alt="Logo" width={66} height={51}/>
               
                 {LINKS.map((link)=>(
                    <Link className="hidden md:flex items-center gap-2 text-[#8A8A8A]" key={link.name} href={link.href}>
                        <Image src={link.icon} alt={link.name} width={24} height={24}/>
                         <span className="font-normal text-[14px] text-[#8A8A8A]">{link.name}</span>
                    </Link>
                 ))}
            </div>
            <div className="md:flex hidden gap-4">
                <Image src={"/shopping-bag.svg"} width={24} height={24} alt=""/>
                <Image src={"/notification-03.svg"} width={24} height={24} alt=""/>
                <Image src={"/love.svg"} width={24} height={24} alt=""/>
                <Image src={"/en.svg"} width={48} height={24} alt=""/>
                <Image src={"/people.svg"} width={48} height={24} alt=""/>
            </div>
            <div className="md:hidden cursor-pointer" onClick={()=>setOpenMenu(!openMenu)} >
            <Image src="/menu.svg" alt="menu" width={24} height={24} className="md:hidden"/>
            </div>
        </div>
        {openMenu && (
            <div className="relative p-2 rounded-lg top-20  bg-white">
              <div className="flex flex-col gap-4">
              {LINKS.map((link)=>(
                    <Link className="flex items-center gap-2 text-[#8A8A8A]" key={link.name} href={link.href}>
                        <Image src={link.icon} alt={link.name} width={24} height={24}/>
                         <span className="font-normal text-[14px] text-[#8A8A8A]">{link.name}</span>
                    </Link>
                 ))}
                 <div className="flex gap-4">
                 <Image src="/shopping-bag.svg" width={24} height={24} alt=""/>
                 <Image src="/notification-03.svg" width={24} height={24} alt=""/>
                 <Image src="/love.svg" width={24} height={24} alt=""/>
                 <Image src="/en.svg" width={48} height={24} alt=""/>
                 <Image src="/people.svg" width={48} height={24} alt=""/>
                 </div>
              </div>
            </div>
         )}
         </div>
        
    )
}
export default Header