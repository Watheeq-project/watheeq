"use client";

import ReactCountryFlag from "react-country-flag";
import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";

type PhoneInputProps = {
    label: string;
    placeholder?: string;
    error?: string;
    register: UseFormRegisterReturn;
};

const SAUDI_CODE = "+966";
const MAX_LEN = 9;

export default function PhoneInput({
    label,
    placeholder,
    error,
    register,
}: PhoneInputProps) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#000000] text-left [dir='rtl']:text-right">
                {label}
            </label>

            <div className="flex h-11 w-full items-center overflow-hidden rounded-lg border border-border bg-white [dir='rtl']:flex-row-reverse">
                <div className="flex h-full items-center gap-2 px-3 border-e border-border [dir='rtl']:border-e-0 [dir='rtl']:border-s [dir='rtl']:flex-row-reverse">
                    <ReactCountryFlag
                        countryCode="SA"
                        svg
                        aria-label="Saudi Arabia"
                        style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "9999px",
                            objectFit: "cover",
                        }}
                    />
                    <span className="text-sm font-medium text-[#1B1B1B] [dir='rtl']:direction-ltr">
                        {SAUDI_CODE}
                    </span>
                </div>

                <Input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder={placeholder}
                    className="h-11 flex-1 border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-3 text-sm text-left [dir='rtl']:text-right"
                    {...register}
                    onChange={(e) => {
                        const digits = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, MAX_LEN);
                        e.target.value = digits;
                        register.onChange(e);
                    }}
                />
            </div>

            {error ? (
                <p className="text-xs text-red-600 text-left [dir='rtl']:text-right">
                    {error}
                </p>
            ) : null}
        </div>
    );
}
