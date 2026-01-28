"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function PasswordField({
  label,
  error,
  className,
  ...props
}: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  const Icon = show ? EyeOff : Eye;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#000000] text-start">
        {label}
      </label>

      <div className="relative">
        <Input
          {...props}
          type={show ? "text" : "password"}
          className={[
            "h-11 pe-10",
            error ? "border-red-500 focus-visible:ring-red-500" : "",
            className ?? "",
          ].join(" ")}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setShow((v) => !v)}
          className="absolute top-1/2 -translate-y-1/2 end-3 h-9 w-9 p-0 text-[#000000]/60 hover:text-[#000000]"
          aria-label={show ? "Hide password" : "Show password"}
        >
          <Icon size={18} strokeWidth={1.8} />
        </Button>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
