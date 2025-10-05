"use client"
import React from 'react'
import axios from "axios"
import { toast } from "react-toastify"
const ResendCodeButton = () => {
    const resendCode = async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            await axios.post("api?url=auth/verify-email/resend-code",{ })
            toast.success("Code resend successfully")
        } catch (error:any) {
            toast.error(error.response?.data?.error?.message)
        }
    }
  return (
     <form onSubmit={resendCode}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Resend Code</button>
     </form>
  )
}

export default ResendCodeButton