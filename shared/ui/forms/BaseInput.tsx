import { forwardRef, InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";


export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <Input
                ref={ref}
                {...props}
                className={`h-11 w-full rounded-md border px-3 transition-all outline-none 
                ${error
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-[#D6D6D6] focus-visible:ring-[#C5A377]"
                } 
                ${className}`}
            />
        );
    }
);

BaseInput.displayName = "BaseInput";