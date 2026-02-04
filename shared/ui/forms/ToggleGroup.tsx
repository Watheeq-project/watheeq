"use client";

import { FormField } from "@/shared/ui/forms/FormField";
import { Check } from "lucide-react";

type ToggleValue = string | boolean | number;

type ToggleOption<T extends ToggleValue> = {
    label: string;
    value: T;
};

interface ToggleGroupProps<T extends ToggleValue> {
    options: [ToggleOption<T>, ToggleOption<T>];
    value: T;
    onChange: (value: T) => void;
    label: string;
    error?: string;
}

export function ToggleGroup<T extends ToggleValue>({
    options,
    value,
    onChange,
    label,
    error,
}: ToggleGroupProps<T>) {
    return (
        <FormField label={label} error={error}>
            <div className="flex gap-2 p-1 rounded-lg w-fit">
                {options.map((opt) => {
                    const isActive = value === opt.value;

                    return (
                        <button
                            key={String(opt.label)}
                            type="button"
                            onClick={() => onChange(opt.value)}
                            className={`px-11 py-2 text-black font-bold rounded-md transition-all text-sm flex items-center justify-center gap-2 ${isActive
                                    ? "bg-white border border-[#C5A377] shadow-sm"
                                    : "bg-[#EEEEEE] hover:text-gray-700 opacity-60 border border-transparent"
                                }`}
                        >
                            {isActive && (
                                <div className="flex items-center justify-center w-5 h-5 bg-green-600 rounded-full animate-in zoom-in duration-200">
                                    <Check size={12} strokeWidth={4} className="text-white" />
                                </div>
                            )}
                            {opt.label}
                        </button>
                    );
                })}
            </div>
        </FormField>
    );
}

ToggleGroup.displayName = "ToggleGroup";
