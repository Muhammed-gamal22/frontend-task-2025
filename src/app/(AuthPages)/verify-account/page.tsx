"use client"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { yupResolver } from "@hookform/resolvers/yup"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Controller, useForm } from "react-hook-form"
import { verifySchema } from "@/app/utils/login"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useState } from "react"
const VerifyAccountPage = () => {
    const router = useRouter()
    const[isLoading,setIsLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(verifySchema),
      })
    const onSubmit = async(data: any) => {
         try {
            setIsLoading(true)
            const response = await axios.post("api?url=auth/verify-email", data)
            if(response.status === 200){
              setIsLoading(false)
                toast.success(response.data.message)
                router.push("/dashboard")
            }
         } catch (error:any) {
            if(error.response?.status === 400){
                console.log(error.response?.data?.error?.message)
                if (error.response?.data?.error?.message?.includes("هذا الحساب مفعل")) {
                    router.push("/dashboard")
                  }
                toast.error(error.response?.data?.error?.message)
               
                
            }
         }finally{
            setIsLoading(false)
         }
        
      }
    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center h-screen w-full gap-4"
      >
        <h2 className="text-xl font-bold">Verify Account</h2>
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              value={field.value || ""}
              onChange={field.onChange}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
  
    
        {errors.code && (
          <p className="text-red-500 text-sm">{errors.code.message}</p>
        )}
  
        <button
          type="submit"
          className="mt-4 w-[150px] cursor-pointer py-3 rounded-2xl bg-blue-500 text-white px-4"
        >
          {isLoading ? "Loading..." : "Verify"}
        </button>
      </form>
    )
}
export default VerifyAccountPage