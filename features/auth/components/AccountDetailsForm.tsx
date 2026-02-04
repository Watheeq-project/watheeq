"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import PasswordField from "@/features/auth/components/PasswordField";
import PhoneInput from "@/features/auth/components/PhoneInput";
import building from "../../../public/icons/buliding.png";
import buildingColored from "../../../public/icons/buliding colored.png";
import person from "../../../public/icons/profile-2user.png";
import personColored from "../../../public/icons/profile-2user colored.png";
import {
    registerAccountDetailsSchema,
    type RegisterAccountDetailsValues,
    type RegisterAccountType,
} from "@/features/auth/validation/registerAccountDetails.schema";

function RuleIndicator({ active }: { active: boolean }) {
    return (
        <span
            className={[
                "inline-flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200 ",
                active ? "bg-[#1F8A5B]" : "border border-[#D0D5DD] bg-white",
            ].join(" ")}
        >
            {active ? <Minus className="h-3 w-3 text-white " strokeWidth={3} /> : null}
        </span>
    );
}

export default function AccountDetailsForm() {
    const t = useTranslations("register");
    const te = useTranslations("errors");

    const locale = useLocale();
    const dir = locale === "ar" ? "rtl" : "ltr";

    const [accountType, setAccountType] = useState<RegisterAccountType>("users");

    const schema = useMemo(
        () =>
            registerAccountDetailsSchema({
                phoneInvalid: te("saudiPhoneInvalid"),
                idNumberInvalid: te("idNumberInvalid"),
                birthDateInvalid: te("birthDateInvalid"),
                invalidEmail: te("invalidEmail"),
                passwordRules: te("registerPasswordRules"),
                acceptRequired: te("acceptNationalDataRequired"),
            }),
        [te]
    );

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isValid },
    } = useForm<RegisterAccountDetailsValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            phone: "",
            idNumber: "",
            birthDate: "",
            email: "",
            password: "",
            acceptNationalData: false,
        },
        mode: "onChange",
    });

    const password = useWatch({ control, name: "password" });

    const passwordChecks = useMemo(() => {
        const value = password ?? "";
        return {
            len: value.length >= 8,
            num: /\d/.test(value),
            upper: /[A-Z]/.test(value),
            lower: /[a-z]/.test(value),
            special: /[@$!%*#?&]/.test(value),
        };
    }, [password]);

    const tabs = [
        {
            key: "users" as const,
            label: t("tabs.users"),
            icon: person,
            iconActive: personColored,
        },
        {
            key: "company" as const,
            label: t("tabs.company"),
            icon: building,
            iconActive: buildingColored,
        },
    ];

    const onSubmit = async (data: RegisterAccountDetailsValues) => {
        console.log("register account details submit", { ...data, accountType });
    };

    return (
        <div
            dir={dir}
            className="w-3/4 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 py-8 px-6 md:px-12"
        >
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1B1B1B]">
                    {t("formTitle")}
                </h1>
            </div>

            <div className="flex justify-center mb-8">
                <div className="flex w-full max-w-[520px] border border-gray-200 p-1 rounded-xl bg-white">
                    {tabs.map((tab) => {
                        const active = accountType === tab.key;

                        return (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setAccountType(tab.key)}
                                className={[
                                    "cursor-pointer flex-1 flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200",
                                    active
                                        ? "bg-[rgba(197,163,119,0.06)] text-[#9C733D]"
                                        : "bg-white text-[#7A7A7A]",
                                ].join(" ")}
                            >
                                <Image
                                    src={active ? tab.iconActive : tab.icon}
                                    alt={tab.label}
                                    width={22}
                                    height={22}
                                />
                                <span className="text-base md:text-lg">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PhoneInput
                        label={t("fields.phone")}
                        placeholder={t("placeholders.phone")}
                        register={register("phone")}
                        error={errors.phone?.message}
                    />

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold">{t("fields.idNumber")}</label>
                        <Input
                            type="text"
                            inputMode="numeric"
                            placeholder={t("placeholders.idNumber")}
                            className={["h-11", errors.idNumber ? "border-red-500" : ""].join(" ")}
                            {...register("idNumber")}
                            onChange={(e) => {
                                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                e.target.value = digits;
                                register("idNumber").onChange(e);
                            }}
                        />
                        {errors.idNumber?.message && (
                            <p className="text-sm text-red-600">{errors.idNumber.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold">{t("fields.birthDate")}</label>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder={t("placeholders.birthDate")}
                                className={["h-11 pe-10", errors.birthDate ? "border-red-500" : ""].join(" ")}
                                {...register("birthDate")}
                            />
                            <Image
                                src="/images/register/calendar.svg"
                                alt="calendar"
                                width={20}
                                height={20}
                                className="absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none"
                            />
                        </div>
                        {errors.birthDate?.message && (
                            <p className="text-sm text-red-600">{errors.birthDate.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold">{t("fields.email")}</label>
                        <Input
                            type="email"
                            placeholder={t("placeholders.email")}
                            className={["h-11", errors.email ? "border-red-500" : ""].join(" ")}
                            {...register("email")}
                        />
                        {errors.email?.message && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="w-full md:max-w-[500px]">
                    <PasswordField
                        label={t("fields.password")}
                        placeholder={t("placeholders.password")}
                        {...register("password")}
                        error={errors.password?.message}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <RuleIndicator active={passwordChecks.len} />
                        <span>{t("passwordRules.len")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RuleIndicator active={passwordChecks.num} />
                        <span>{t("passwordRules.num")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RuleIndicator active={passwordChecks.upper} />
                        <span>{t("passwordRules.upper")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RuleIndicator active={passwordChecks.special} />
                        <span>{t("passwordRules.special")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RuleIndicator active={passwordChecks.lower} />
                        <span>{t("passwordRules.lower")}</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 mt-4 ">
                        <input
                            type="checkbox"
                            id="terms"
                            className={[
                                "h-4 w-4 rounded border-gray-300 accent-[#1F8A5B] cursor-pointer",
                                errors.acceptNationalData ? "ring-1 ring-red-500" : "",
                            ].join(" ")}
                            {...register("acceptNationalData")}
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            {t("acceptNationalData")}
                        </label>
                    </div>

                    {errors.acceptNationalData?.message && (
                        <p className="text-sm text-red-600">{errors.acceptNationalData.message}</p>
                    )}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className={[
                            "w-full max-w-[499px] font-bold py-3 rounded-lg transition-colors",
                            isSubmitting || !isValid
                                ? "bg-[#C5A377]/60 cursor-not-allowed text-white"
                                : "bg-[#C5A377] hover:bg-[#C5A377]/90 text-white",
                        ].join(" ")}
                    >
                        {t("next")}
                    </button>
                </div>
            </form>
        </div>
    );
}
