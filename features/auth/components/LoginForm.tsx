"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/navigation";

import PhoneInput from "./PhoneInput";
import PasswordField from "./PasswordField";

import {
    loginSchema,
    type LoginFormValues,
    type LoginMode,
} from "../validation/login.schema";

export default function LoginForm() {
    const t = useTranslations("login");
    const te = useTranslations("errors");

    const [mode, setMode] = useState<LoginMode>("users");

    const schema = useMemo(
        () =>
            loginSchema({
                phoneInvalid: te("saudiPhoneInvalid"),
                passwordMin: te("loginPasswordMin"),
            }),
        [te]
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(schema),
        defaultValues: { phone: "", password: "" },
        mode: "onChange",
    });

    const onSubmit = async (data: LoginFormValues) => {
        console.log("login submit", { ...data, mode });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <p className="text-[#1B1B1B] font-bold text-[14px] mb-3 text-start">
                    {t("loginVia")}
                </p>

                <div className="grid grid-cols-2  p-[5px] border rounded-[5px] border-[#EEEEEE] ">

                    <button
                        type="button"
                        className={`flex flex-row-reverse items-center gap-2 justify-center py-[10px] font-bold cursor-pointer rounded transition-colors
              ${mode === "users"
                                ? "bg-[rgba(197,163,119,0.06)] text-[#9C733D]"
                                : "text-[#666666]"
                            }`}
                        onClick={() => setMode("users")}
                    >
                        <span>{t("tabs.users")}</span>
                        <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 8.18768C6.38 8.18768 4.25 10.3177 4.25 12.9377C4.25 15.5077 6.26 17.5877 8.88 17.6777C8.96 17.6677 9.04 17.6677 9.1 17.6777C9.12 17.6777 9.13 17.6777 9.15 17.6777C9.16 17.6777 9.16 17.6777 9.17 17.6777C11.73 17.5877 13.74 15.5077 13.75 12.9377C13.75 10.3177 11.62 8.18768 9 8.18768Z"
                                fill={mode === "users" ? "#9C733D" : "#666666"}
                            />
                            <path
                                d="M14.0809 20.3377C11.2909 18.4777 6.74094 18.4777 3.93094 20.3377C2.66094 21.1877 1.96094 22.3377 1.96094 23.5677C1.96094 24.7977 2.66094 25.9377 3.92094 26.7777C5.32094 27.7177 7.16094 28.1877 9.00094 28.1877C10.8409 28.1877 12.6809 27.7177 14.0809 26.7777C15.3409 25.9277 16.0409 24.7877 16.0409 23.5477C16.0309 22.3177 15.3409 21.1777 14.0809 20.3377Z"
                                fill={mode === "users" ? "#9C733D" : "#666666"}
                            />
                            <path
                                d="M19.9894 13.5277C20.1494 15.4677 18.7694 17.1677 16.8594 17.3977C16.8494 17.3977 16.8494 17.3977 16.8394 17.3977H16.8094C16.7494 17.3977 16.6894 17.3977 16.6394 17.4177C15.6694 17.4677 14.7794 17.1577 14.1094 16.5877C15.1394 15.6677 15.7294 14.2877 15.6094 12.7877C15.5394 11.9777 15.2594 11.2377 14.8394 10.6077C15.2194 10.4177 15.6594 10.2977 16.1094 10.2577C18.0694 10.0877 19.8194 11.5477 19.9894 13.5277Z"
                                fill={mode === "users" ? "#9C733D" : "#666666"}
                            />
                            <path
                                d="M21.9902 22.7777C21.9102 23.7477 21.2902 24.5877 20.2502 25.1577C19.2502 25.7077 17.9902 25.9677 16.7402 25.9377C17.4602 25.2877 17.8802 24.4777 17.9602 23.6177C18.0602 22.3777 17.4702 21.1877 16.2902 20.2377C15.6202 19.7077 14.8402 19.2877 13.9902 18.9777C16.2002 18.3377 18.9802 18.7677 20.6902 20.1477C21.6102 20.8877 22.0802 21.8177 21.9902 22.7777Z"
                                fill={mode === "users" ? "#9C733D" : "#666666"}
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={`flex flex-row-reverse items-center gap-2 justify-center py-[10px] font-bold cursor-pointer rounded transition-colors
              ${mode === "company"
                                ? "bg-[rgba(197,163,119,0.06)] text-[#9C733D]"
                                : "text-[#666666]"
                            }`}
                        onClick={() => setMode("company")}
                    >
                        <span>{t("tabs.company")}</span>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 0H4C1 0 0 1.79 0 4V20H18V4C18 1.79 17 0 14 0ZM7 15.25H4C3.59 15.25 3.25 14.91 3.25 14.5C3.25 14.09 3.59 13.75 4 13.75H7C7.41 13.75 7.75 14.09 7.75 14.5C7.75 14.91 7.41 15.25 7 15.25ZM7 10.75H4C3.59 10.75 3.25 10.41 3.25 10C3.25 9.59 3.59 9.25 4 9.25H7C7.41 9.25 7.75 9.59 7.75 10C7.75 10.41 7.41 10.75 7 10.75ZM7 6.25H4C3.59 6.25 3.25 5.91 3.25 5.5C3.25 5.09 3.59 4.75 4 4.75H7C7.41 4.75 7.75 5.09 7.75 5.5C7.75 5.91 7.41 6.25 7 6.25ZM14 15.25H11C10.59 15.25 10.25 14.91 10.25 14.5C10.25 14.09 10.59 13.75 11 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM14 10.75H11C10.59 10.75 10.25 10.41 10.25 10C10.25 9.59 10.59 9.25 11 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75ZM14 6.25H11C10.59 6.25 10.25 5.91 10.25 5.5C10.25 5.09 10.59 4.75 11 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
                                fill={mode === "company" ? "#9C733D" : "#A5A5A5"}
                            />
                        </svg>
                    </button>

                </div>
            </div>

            <PhoneInput
                label={t("phoneLabel")}
                placeholder={t("phonePlaceholder")}
                register={register("phone")}
                error={errors.phone?.message}
            />

            <PasswordField
                label={t("passwordLabel")}
                placeholder={t("passwordPlaceholder")}
                {...register("password")}
                error={errors.password?.message}
            />

            <div className="flex flex-row-reverse items-center justify-between">
                <Link
                    href="/forgot-password"
                    className="text-[#2A73FF] font-medium text-sm hover:opacity-80 inline-flex items-center gap-2"
                >
                    {t("forgotPassword")}
                </Link>

                <div className="flex items-center gap-2">
                    <span className="text-[#121217] font-medium text-sm">{t("remember")}</span>
                    <Checkbox className="w-5 h-5! cursor-pointer" />
                </div>
            </div>

            <Button
                type="submit"
                className="h-11 w-full rounded-lg bg-[#C5A377] text-white hover:opacity-90 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#E7D8C3] disabled:hover:opacity-100"
                disabled={!isValid || isSubmitting}
            >
                {t("submit")}
            </Button>
        </form>
    );
}
