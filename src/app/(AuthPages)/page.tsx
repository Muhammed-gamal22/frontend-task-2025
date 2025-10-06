"use client"
import Image from "next/image"
import {FieldError, useForm} from "react-hook-form"
import Input from "../components/input"
import {yupResolver} from "@hookform/resolvers/yup"
import {registerSchema} from "../utils/register"
import axios from "axios"
import {toast} from "react-toastify"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
const RegisterPage = ()=>{
    const[isLoading,setIsLoading] = useState(false);
    const {register,handleSubmit,formState:{errors}} = useForm({
        mode:"onChange",
        resolver:yupResolver(registerSchema)
    })
    const router = useRouter()
    const onSubmit = async (formData: any) => {
        try {
          setIsLoading(true)
          const response = await axios.post("/api?url=auth/register", formData);
         if(response.status === 200){
            toast.success(response.data.message)
            setIsLoading(false)
            router.push("/login")
         }
        } catch (error: any) {
          setIsLoading(false)
          const serverErrors = error.response?.data?.error?.errors;
          if(error.response?.data?.error?.message){
            toast.error(error.response?.data?.error?.message)
          }
          if (serverErrors) {
            Object.entries(serverErrors).forEach(([field, messages]: any) => {
              messages.forEach((msg: string) => {
                toast.error(msg); 
              });
            });
          }
        }finally{
          setIsLoading(false)
        }
      };
      
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="
        flex flex-col gap-[40px] mt-[120px] h-full  items-center justify-center">
            <Image src="/Logo.svg" alt="Logo" width={66} height={51}/>
            <div className="flex flex-col md:flex-row gap-4">
            <Input errors={errors.name as FieldError} 
            label="Name" {...register("name",{required:true})}/>
            <Input errors={errors.email as FieldError} label="Email" {...register("email",{required:true})}/>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
            <Input errors={errors.password as FieldError} 
            label="Password" 
            {...register("password",{required:true})}/>
            <Input errors={errors.password_confirmation as FieldError} 
            label="Confirm Password" 
            {...register("password_confirmation",{required:true})}/>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
            <Input errors={errors.mobile as FieldError} 
            label="phone number" 
            {...register("mobile",{required:true})}/>
            <Input 
            errors={errors.mobile_country_code as FieldError} 
            label="mobile_country_code" 
            {...register("mobile_country_code",{required:true})}/>
            </div>
            <button className="w-[300px] cursor-pointer rounded-2xl bg-purple-500 text-white py-4" type="submit">{isLoading ? "Loading..." : "Register"}</button>
            <div className="flex gap-1">
               <p>Already have an account?</p>
               <Link className="text-blue-500" href="/login">Login</Link>
            </div>
        </form>
    )
}
export default RegisterPage