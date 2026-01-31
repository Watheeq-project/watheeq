import { ChevronDown } from "lucide-react";
 import flag from "@/public/saudy.webp";
import Image from "next/image";
function LoginFooter() {
  return (
    <div className=" flex justify-between items-center w-full px-15 overflow-hidden ">

  <div className="relative ">
      {/* Fake select UI */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-[4px] px-4 py-2.5  cursor-pointer bg-white">
        {/* Arrow */}
        <ChevronDown className="w-4 h-4 text-gray-400" />

        {/* Language text */}
        <span className="text-gray-600 text-sm">عربي</span>

        {/* Flag */}
       <Image src={flag} alt="Saudi Flag" width={30} height={30} className="w-[32px] h-[22px] rounded-[3px]  h-full " />
      </div>

    
      <select className="absolute inset-0 opacity-0 cursor-pointer">
        <option value="ar">عربي</option>
        <option value="en">English</option>
      </select>
   
</div>
<div className="flex items-center  gap-[30px]">
  <p>اتصل بنا</p>
  <p>حول المنصه</p>
  <p>الشروط والأحكام</p>
</div>
    </div>
  )
}

export default LoginFooter






