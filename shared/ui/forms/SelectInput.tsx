import { FormField } from "@/shared/ui/forms/FormField";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import type React from "react";
import { useTranslations } from "next-intl";

export type SelectOption<V extends string | number = string> = {
    value: V;
    label: string;
};

export type SelectInputProps<V extends string | number = string> =
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
        label: string;
        error?: string;
        options: SelectOption<V>[];
    };

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
    ({ label, error, options, ...props }, ref) => {
        const t = useTranslations("common");

        const currentValue = String(props.value ?? "");
        const isPlaceholderSelected = currentValue === "";

        return (
            <FormField label={label} error={error}>
                <div className="relative">
                    <select
                        ref={ref}
                        {...props}
                        className={`h-11 w-full rounded-md border border-input px-3 bg-white outline-none appearance-none transition-colors duration-200 ${error ? "border-red-500" : "border-[#D6D6D6]"
                            } ${isPlaceholderSelected ? "text-gray-400" : "text-black"}`}
                    >
                        <option value="" disabled hidden>
                            {t("select")}...
                        </option>

                        {options.map((opt) => (
                            <option key={String(opt.value)} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-gray-400">
                        <ChevronDown size={18} />
                    </div>
                </div>
            </FormField>
        );
    }
);

SelectInput.displayName = "SelectInput";
