"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import OtpField from "../components/OtpInput";

import repeatAr from "../../../public/icons/repeat ar.png";
import repeatEn from "../../../public/icons/repeat en.png";

import {
    verifyOtpSchema,
    type VerifyOtpFormValues,
} from "@/features/auth/validation/verifyOtp.schema";

type Props = {
    initialSeconds?: number;
};

export default function VerifyOtpForm({ initialSeconds = 60 }: Props) {
    const t = useTranslations("verifyOtp");
    const te = useTranslations("errors");
    const locale = useLocale();

    const repeatIcon = locale === "en" ? repeatEn : repeatAr;

    const schema = useMemo(
        () =>
            verifyOtpSchema({
                otpRequired: te("otpRequired"),
                otpInvalid: te("otpInvalid"),
            }),
        [te]
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<VerifyOtpFormValues>({
        resolver: zodResolver(schema),
        defaultValues: { otp: "" },
        mode: "onSubmit",
    });

    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;
        const id = setInterval(() => setSeconds((seconds) => seconds - 1), 1000);
        return () => clearInterval(id);
    }, [seconds]);

    const formatMMSS = (seconds: number) => {
        const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
        const ss = String(seconds % 60).padStart(2, "0");
        return `${mm}:${ss}`;
    };

    const onSubmit = async (data: VerifyOtpFormValues) => {
        console.log("verify-otp submit", data);
    };

    const onResend = () => {
        setSeconds(initialSeconds);
        setValue("otp", "");
        console.log("resend otp");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
                <Controller
                    control={control}
                    name="otp"
                    render={({ field }) => (
                        <OtpField
                            value={field.value}
                            onChange={(v) =>
                                field.onChange(v.replace(/\D/g, "").slice(0, 6))
                            }
                        />
                    )}
                />

                {errors.otp?.message ? (
                    <p className="text-center text-xs text-red-600">
                        {errors.otp.message}
                    </p>
                ) : null}
            </div>

            <Button
                type="submit"
                className="h-11 w-full rounded-lg bg-[#C5A377] text-white hover:opacity-90 cursor-pointer"
            >
                {t("confirm")}
            </Button>

            <p className="text-center text-sm text-[#1B1B1B]">
                {t("expiresIn", { time: formatMMSS(seconds) })}
            </p>

            <div className="flex items-center justify-center gap-2">
                <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#293C7C] cursor-pointer"
                    onClick={onResend}
                    disabled={seconds > 0}
                >
                    <Image src={repeatIcon} alt="resend" width={18} height={18} />
                    {t("resend")}
                </button>
            </div>
        </form>
    );
}
