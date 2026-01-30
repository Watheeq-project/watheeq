"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import PhoneInput from "./PhoneInput";

import {
    forgotPasswordSchema,
    ForgotPasswordFormValues,
} from "@/features/auth/validation/forgotPassword.schema";

const SAUDI_CODE = "+966";

export default function ForgotPasswordForm() {
    const t = useTranslations("forgotPassword");
    const te = useTranslations("errors");

    const schema = useMemo(
        () => forgotPasswordSchema(te("saudiPhoneInvalid")),
        [te]
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(schema),
        defaultValues: { phone: "" },
        mode: "onSubmit",
    });

    const onSubmit = async (data: ForgotPasswordFormValues) => {
        const payload = {
            countryCode: SAUDI_CODE,
            phone: data.phone,
        };
        console.log("forgot-password submit", payload);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <PhoneInput
                label={t("phoneLabel")}
                placeholder={t("phonePlaceholder")}
                register={register("phone")}
                error={errors.phone?.message}
            />

            <Button
                type="submit"
                className="h-11 w-full rounded-lg bg-[#C5A377] text-white hover:opacity-90 cursor-pointer"
                disabled={isSubmitting}
            >
                {t("next")}
            </Button>
        </form>
    );
}
