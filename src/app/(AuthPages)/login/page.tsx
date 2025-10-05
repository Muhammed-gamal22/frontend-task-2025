"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@/app/utils/login"
import { useForm } from "react-hook-form"
import Image from "next/image"
import Input from "@/app/components/input"
import { FieldError } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { saveCookie } from "@/app/services/api"
const LoginPage = ()=>{
    const router = useRouter()
    const onSubmit = async (data:any)=>{
        try {
            const response = await axios.post("/api?url=auth/login", data);
            await saveCookie(response?.data?.data?.token)
           if(response.status === 200){
              toast.success(response.data.message)
              router.push("/verify-account")
           }
          } catch (error: any) {
            const serverErrors = error.response?.data?.error?.errors;
            if(error.response?.data?.error?.message && !serverErrors){
              toast.error(error.response?.data?.error?.message)
            }
            if (serverErrors) {
              Object.entries(serverErrors).forEach(([field, messages]: any) => {
                messages.forEach((msg: string) => {
                  toast.error(msg); 
                });
              });
            }
          }
    }
    const {register,handleSubmit,formState:{errors}} = useForm({
        mode:"onChange",
        resolver:yupResolver(loginSchema)
    })

    return(
<form onSubmit={handleSubmit(onSubmit)} className="
        flex flex-col gap-[40px] h-screen items-center justify-center">
            <Image src="/Logo.svg" alt="Logo" width={66} height={51}/>
            <div className="flex flex-col gap-4">
           <Input errors={errors.email as FieldError} 
            label="Email" 
            {...register("email",{required:true})}/>
            <Input errors={errors.password as FieldError} 
            label="Password" 
            {...register("password",{required:true})}/>
           
            </div>
            <button className="w-[300px] cursor-pointer rounded-2xl bg-purple-500 text-white py-4" type="submit">Login</button>
        </form>
    )
}
export default LoginPage