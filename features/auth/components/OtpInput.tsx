"use client";

import OtpInput from "react-otp-input";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function OtpField({ value, onChange }: Props) {
    return (
        <OtpInput
            value={value}
            onChange={onChange}
            numInputs={6}
            shouldAutoFocus
            inputType="tel"
            renderInput={(props) => (
                <input
                    {...props}
                    className="
            h-14 flex-1 min-w-0 rounded-md border border-border bg-white
            text-center text-lg font-semibold outline-none
            focus:border-[#C5A377]
          "
                />
            )}
            containerStyle={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                direction: "ltr"
            }}
        />
    );
}
