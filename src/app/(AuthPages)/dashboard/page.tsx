
import ResendCodeButton from "@/app/components/ResendCodeButton"
import { getData } from "@/app/services/api"
import Link from "next/link"
const DashboardPage = async()=>{
    const response = await getData({queryKey:["auth/user-data"]})
   
    return(
        <div  className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">Welcome {response?.data?.name}</h1>
            <ResendCodeButton/>
            <Link href="/HomePage" className="text-blue-500 underline mt-[12px]">
              الانتقال للصفحة الرئيسية
            </Link>
        </div>
    )
}
export default DashboardPage