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
const VerifyAccountPage = () => {
    const router = useRouter()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(verifySchema),
      })
    const onSubmit = async(data: any) => {
         try {
            const response = await axios.post("api?url=auth/verify-email", data)
            if(response.status === 200){
                toast.success(response.data.message)
                router.push("/dashboard")
            }
         } catch (error:any) {
            if(error.response?.status === 400){
                toast.error(error.response?.data?.error?.message)
            }
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
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          تأكيد
        </button>
      </form>
    )
}
export default VerifyAccountPage