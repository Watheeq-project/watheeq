
'use client'
import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BaseInput } from "./BaseInput";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/button";

export const PasswordInput = forwardRef<HTMLInputElement, any>(
    ({ label, error, ...props }, ref) => {
        const [show, setShow] = useState(false);
        const Icon = show ? EyeOff : Eye;

        return (
            <FormField label={label} error={error}>
                <BaseInput
                    {...props}
                    ref={ref}
                    type={show ? "text" : "password"}
                    error={!!error}
                    className="pe-10"
                />

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShow((v) => !v)}
                    className="absolute top-1/2 -translate-y-1/2 end-3 h-9 w-9 p-0 text-[#000000]/60 hover:text-[#000000] hover:bg-transparent"
                    aria-label={show ? "Hide password" : "Show password"}
                >
                    <Icon size={18} strokeWidth={1.8} />
                </Button>
            </FormField>
        );
    }
);

PasswordInput.displayName = "PasswordInput";