"use client";
import { svg3 } from "@/svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";
import flag from "@/public/saudy.webp";
import { Checkbox } from "@/components/ui/checkbox";
import imgError from "@/public/error.png";
type LoginFormData = z.infer<typeof loginSchema>;
/* Zod Schema */
const loginSchema = z.object({
  password: z.string().min(6, "كلمة المرور غير صحيحه"),
  phone: z.string().min(8, "رقم الجوال غير صيحيح"),
});

export default function LoginForm() {
  const [selected, setSelected] = useState("users");
 const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
});

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-[30px] py-[20px]  flex flex-col gap-4 font-cairo  text-right"
    >
      <p className=" text-[#1B1B1B] font-bold text-[14px] mb-[10px] font-cairo ">
        تسجيل الدخول من خلال
      </p>
      <div className="grid grid-cols-2 p-[5px] border rounded-[5px] border-[#EEEEEE] mb-[13px]">
        <div
          className={`flex items-center gap-2 justify-center cursor-pointer font-bold ${selected === "company" ? "bg-[rgba(197,163,119,0.06)] text-[#9C733D]" : ""}`}
          onClick={() => setSelected("company")}
        >
          <p>شركات</p>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0H4C1 0 0 1.79 0 4V20H18V4C18 1.79 17 0 14 0ZM7 15.25H4C3.59 15.25 3.25 14.91 3.25 14.5C3.25 14.09 3.59 13.75 4 13.75H7C7.41 13.75 7.75 14.09 7.75 14.5C7.75 14.91 7.41 15.25 7 15.25ZM7 10.75H4C3.59 10.75 3.25 10.41 3.25 10C3.25 9.59 3.59 9.25 4 9.25H7C7.41 9.25 7.75 9.59 7.75 10C7.75 10.41 7.41 10.75 7 10.75ZM7 6.25H4C3.59 6.25 3.25 5.91 3.25 5.5C3.25 5.09 3.59 4.75 4 4.75H7C7.41 4.75 7.75 5.09 7.75 5.5C7.75 5.91 7.41 6.25 7 6.25ZM14 15.25H11C10.59 15.25 10.25 14.91 10.25 14.5C10.25 14.09 10.59 13.75 11 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM14 10.75H11C10.59 10.75 10.25 10.41 10.25 10C10.25 9.59 10.59 9.25 11 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75ZM14 6.25H11C10.59 6.25 10.25 5.91 10.25 5.5C10.25 5.09 10.59 4.75 11 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
              fill={` ${selected === "company" ? " #9C733D" : "#A5A5A5"}`}
            />
          </svg>
        </div>
        <div
          className={`flex items-center gap-2 justify-center py-[10px] font-bold cursor-pointer rounded ${selected === "users" ? "bg-[rgba(197,163,119,0.06)] text-[#9C733D] " : ""}`}
          onClick={() => setSelected("users")}
        >
          <p>افراد</p>
          <svg
            width="24"
            height="31"
            viewBox="0 0 24 31"
            fill="D"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 8.18768C6.38 8.18768 4.25 10.3177 4.25 12.9377C4.25 15.5077 6.26 17.5877 8.88 17.6777C8.96 17.6677 9.04 17.6677 9.1 17.6777C9.12 17.6777 9.13 17.6777 9.15 17.6777C9.16 17.6777 9.16 17.6777 9.17 17.6777C11.73 17.5877 13.74 15.5077 13.75 12.9377C13.75 10.3177 11.62 8.18768 9 8.18768Z"
              fill={` ${selected === "users" ? "#9C733D" : "#666666"}`}
            />
            <path
              d="M14.0809 20.3377C11.2909 18.4777 6.74094 18.4777 3.93094 20.3377C2.66094 21.1877 1.96094 22.3377 1.96094 23.5677C1.96094 24.7977 2.66094 25.9377 3.92094 26.7777C5.32094 27.7177 7.16094 28.1877 9.00094 28.1877C10.8409 28.1877 12.6809 27.7177 14.0809 26.7777C15.3409 25.9277 16.0409 24.7877 16.0409 23.5477C16.0309 22.3177 15.3409 21.1777 14.0809 20.3377Z"
              fill={` ${selected === "users" ? "#9C733D" : "#666666"}`}
            />
            <path
              d="M19.9894 13.5277C20.1494 15.4677 18.7694 17.1677 16.8594 17.3977C16.8494 17.3977 16.8494 17.3977 16.8394 17.3977H16.8094C16.7494 17.3977 16.6894 17.3977 16.6394 17.4177C15.6694 17.4677 14.7794 17.1577 14.1094 16.5877C15.1394 15.6677 15.7294 14.2877 15.6094 12.7877C15.5394 11.9777 15.2594 11.2377 14.8394 10.6077C15.2194 10.4177 15.6594 10.2977 16.1094 10.2577C18.0694 10.0877 19.8194 11.5477 19.9894 13.5277Z"
              fill={` ${selected === "users" ? "#9C733D" : "#666666"}`}
            />
            <path
              d="M21.9902 22.7777C21.9102 23.7477 21.2902 24.5877 20.2502 25.1577C19.2502 25.7077 17.9902 25.9677 16.7402 25.9377C17.4602 25.2877 17.8802 24.4777 17.9602 23.6177C18.0602 22.3777 17.4702 21.1877 16.2902 20.2377C15.6202 19.7077 14.8402 19.2877 13.9902 18.9777C16.2002 18.3377 18.9802 18.7677 20.6902 20.1477C21.6102 20.8877 22.0802 21.8177 21.9902 22.7777Z"
              fill={` ${selected === "users" ? "#9C733D" : "#666666"}`}
            />
          </svg>
        </div>
      </div>
      <div className="mb-4">
        {/* رقم الهاتف */}
        <p className="text-[14px] font-bold text-[#1B1B1B] h-[21px] mb-1.25">
          رقم الجوال
        </p>
        <div
          className={`flex border rounded-[4px] py-[13px] px-[18px] gap-2 items-center
    ${errors.phone ? "border-red-500" : "border-[#D6D6D6]"}
  `}
        >
          {" "}
          {/* العلم */}
          <div className="flex items-center gap-1.5">
            <p className="text-[12px] text-[#1B1B1B]">+966</p>
            <Image
              src={flag}
              alt="Flag"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full mr-[2px]"
            />
            <span className=" border h-full border-[#D6D6D6]"></span>
          </div>
          <input
            type="number"
            {...register("phone")}
            placeholder="5xxxxxxxxx"
            className={`
    flex-1
    placeholder:text-[#A5A5A5]
    placeholder:text-[12px]
    text-[14px]
    outline-0
    font-medium
    text-[#1B1B1B]
    [appearance:textfield]
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none
    ${errors.phone ? "text-[#C30734] " : "text-[#1B1B1B]"}
  `}
          />
         
        </div>
        {/* رساله الخطا */}
         {errors.phone && (
    <p className="text-[#C30734] text-[12px] mt-1 flex items-center gap-1 justify-end ">
      {errors.phone.message}
      <Image src={imgError} alt="Error Icon" width={50} height={50} className="w-4 h-4" />
    </p>
  )}
      </div>
      <div className="mb-4">
        {/* كلمه المرور*/}
        <p className="text-[14px] font-bold text-[#1B1B1B] h-[21px] mb-1.25">
          كلمة المرور
        </p>
        <div className="flex border-1 rounded-[4px] border-[#D6D6D6] py-[13px] px-[18px] gap-2 items-center">
          {/* العلم */}
          <div className="">{svg3}</div>
          
          <input
            type="password"
            dir="rtl"
            {...register("password")}
            placeholder="ادخل كلمة المرور"
            className={`
              flex-1
              placeholder:text-[#A5A5A5]
              placeholder:text-[12px]
              text-[14px]
              outline-0
              font-medium
              ${errors.password ? "text-[#C30734]" : "text-[#1B1B1B]"}
            `}
          />
        </div>

        {errors.password && (
          <p className="text-[#C30734] text-[12px] mt-1 flex items-center gap-1 justify-end">
            {errors.password.message}
            <Image src={imgError} alt="Error" className="w-4 h-4" />
          </p>
        )}
      </div>
      <div className="mb-4 flex justify-between">
        <p className="text-[#2A73FF] font-medium text-[14px] cursor-pointer">
          هل نسيت كلمة المرور؟
        </p>
        <div className="flex items-center gap-[5px]" dir="rtl">
          <Checkbox className="w-5 !h-5  " />
          <p className="text-[#121217] font-medium text-[14px]">تذكرني</p>
        </div>
      </div>
      <button className="mb-4 w-full py-[14px] bg-[#C5A377] font-medium text-[14px] text-white rounded-[4px] cursor-pointer">
        تسجيل الدخول
      </button>
      <div className=" font-medium text-[14px] text-center">
        <p className="text-[#1B1B1B]">
          ليس لديك حساب؟{" "}
          <span className="text-[#2A73FF] cursor-pointer">قم بالتسجيل</span>
        </p>
      </div>
    </form>
  );
}



