import { getData } from "@/app/services/api"
import axios from "axios"
const DashboardPage = async()=>{
    const response = await getData({queryKey:["auth/user-data"]})
    console.log(response)
    return(
        <div>
            <h1>Welcome {response?.data?.name}
            </h1>
        </div>
    )
}
export default DashboardPage