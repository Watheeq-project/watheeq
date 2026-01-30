// components/ui/SelectInput.tsx
import { FormField } from "@/shared/ui/forms/FormField";
import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

export const SelectInput = forwardRef<HTMLSelectElement, any>(({ label, error, options, ...props }, ref) => (
    <FormField label={label} error={error}>
        <div className="relative">
            <select
                ref={ref}
                {...props}
                className={`h-11 w-full rounded-md border border-input  px-3 bg-white outline-none appearance-none transition-colors duration-200 ${
                    error ? "border-red-500" : "border-[#D6D6D6]"
                } ${props.value === "اختر" ? "text-gray-400" : "text-black"}` }
            >
                <option value="اختر" disabled selected hidden >اختر...</option>

                {options.map((opt: any) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-gray-400">
                <ChevronDown size={18} />
            </div>
        </div>
    </FormField>
));

SelectInput.displayName = "SelectInput";