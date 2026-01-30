"use client";
import React, { useRef } from "react";

interface PinInputProps {
    length?: number;
    onChange: (value: string) => void;
    value: string;
    error?: boolean;
}

export function OTPInput({ length = 6, onChange, value, error }: PinInputProps) {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const pinArray = value.split("").concat(Array(length).fill("")).slice(0, length);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value.slice(-1);
        if (!/^\d*$/.test(val)) return;

        const newPin = [...pinArray];
        newPin[index] = val;
        const finalPin = newPin.join("");
        onChange(finalPin);


        if (val && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !pinArray[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };
    const handlePaste = (e: React.ClipboardEvent) => {
        const data = e.clipboardData.getData("text").slice(0, length);
        if (/^\d+$/.test(data)) {
            onChange(data);
            inputsRef.current[data.length - 1]?.focus();
        }
    };
    return (
        <div className="flex gap-2 justify-center" style={{ direction: 'ltr' }}>
            {pinArray.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className={`w-12 h-14 text-center text-xl font-bold border rounded-lg transition-all outline-none focus:ring-2
                        ${error
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#D6D6D6] focus:ring-[#C5A377] focus:border-[#C5A377]"
                    }`}
                />
            ))}
        </div>
    );
}
OTPInput.displayName = 'OTPInput';