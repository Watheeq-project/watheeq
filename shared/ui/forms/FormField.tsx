import React from "react";

export function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-[#000000] text-start">
                {label}
            </label>

            <div className="relative">
                {children}
            </div>
            {error ? (
                <p className="text-sm text-red-600 italic">
                    {error}
                </p>
            ) : null}
        </div>
    );
}