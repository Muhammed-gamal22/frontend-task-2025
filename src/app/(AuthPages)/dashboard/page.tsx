
import ResendCodeButton from "@/app/components/ResendCodeButton"
import { getData } from "@/app/services/api"
import axios from "axios"
import { toast } from "react-toastify"
const DashboardPage = async()=>{
    const response = await getData({queryKey:["auth/user-data"]})
   
    return(
        <div  className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">Welcome {response?.data?.name}</h1>
            <ResendCodeButton/>
        </div>
    )
}
export default DashboardPage