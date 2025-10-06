"use client"
import React, { useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
const ResendCodeButton = () => {
    const[isLoading,setIsLoading] = useState(false);
    const resendCode = async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            setIsLoading(true)
            await axios.post("api?url=auth/verify-email/resend-code",{ })
            toast.success("Code resend successfully")
        } catch (error:any) {
            setIsLoading(false)
            toast.error(error.response?.data?.error?.message)
        }
    }
  return (
     <form onSubmit={resendCode}>
        <button className="bg-blue-500 mt-[12px] text-white cursor-pointer px-4 py-2 rounded-md" type="submit">{isLoading ? "Loading..." : "Resend Code"}</button>
     </form>
  )
}

export default ResendCodeButton