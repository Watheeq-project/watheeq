"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";

import danger from "../../../public/icons/danger.png";
import saudiFlag from "../../../public/soudy.png";

type PhoneInputProps = {
    label: string;
    placeholder?: string;
    error?: string;
    register: UseFormRegisterReturn;
};

const SAUDI_CODE = "+966";
const MAX_LEN = 9;
const PREFIX_W = "w-[80px]";

export default function PhoneInput({
    label,
    placeholder,
    error,
    register,
}: PhoneInputProps) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#000000] text-start [dir='rtl']:text-right">
                {label}
            </label>

            <div className="relative h-11 w-full overflow-hidden rounded-lg border border-[#D6D6D6] bg-[#FFFFFF]">
                <div
                    className={[
                        "absolute left-0 top-0 h-full",
                        PREFIX_W,
                        "flex items-center justify-center gap-2 px-3",
                        "border-r border-[#D6D6D6]",
                    ].join(" ")}
                >
                    <Image
                        src={saudiFlag}
                        alt="Saudi Arabia"
                        width={20}
                        height={20}
                        className="rounded-full object-cover"
                        priority
                    />

                    <span dir="ltr" className="text-sm font-medium text-[#1B1B1B]">
                        {SAUDI_CODE}
                    </span>
                </div>

                <Input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder={placeholder}
                    className={[
                        "h-11 w-full border-0 shadow-none",
                        "focus-visible:ring-0 focus-visible:ring-offset-0",
                        "pl-[92px] pr-3",
                        "text-sm text-left [dir='rtl']:text-right",
                    ].join(" ")}
                    {...register}
                    onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, MAX_LEN);
                        e.target.value = digits;
                        register.onChange(e);
                    }}
                />
            </div>

            {error ? (
                <div className="flex items-center gap-2 justify-start text-xs text-red-600">
                    <Image src={danger} alt="error" width={16} height={16} priority />
                    <span className="[dir='rtl']:text-right">{error}</span>
                </div>
            ) : null}
        </div>
    );
}
