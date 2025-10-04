import { FieldError } from "react-hook-form"

type InputProps = {
    label:string
    errors:FieldError
}
const Input = ({label,errors,...props}:InputProps) => {
    return (
         <div className="flex w-[400px] flex-col gap-2">
             <label>{label}</label>
            <input className="border rounded-md border-[#E5E5E5] p-2" {...props}/>
            {errors && <p className="text-red-500">{errors?.message}</p>}
         </div>

    )
}
export default Input