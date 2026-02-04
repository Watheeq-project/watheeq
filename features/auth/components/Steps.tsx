"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { StepNumber } from "./StepNumber";

function getCurrentStep(pathname: string) {
    if (pathname.includes("/register/nafath")) return 2;
    if (pathname.includes("/register/account-created")) return 4;
    if (pathname.includes("/register/kyc")) return 4;
    return 1;
}

export default function Steps() {
    const t = useTranslations("register");
    const pathname = usePathname();
    const currentStep = getCurrentStep(pathname);

    const steps = [
        {
            id: 1,
            title: t("steps.chooseType.title"),
            description: t("steps.chooseType.subtitle"),
            href: "/register/account-details",
        },
        {
            id: 2,
            title: t("steps.nafath.title"),
            description: t("steps.nafath.subtitle"),
            href: "/register/nafath",
        },
        {
            id: 3,
            title: t("steps.createAccount.title"),
            description: t("steps.createAccount.subtitle"),
            href: "/register/account-created",
        },
        {
            id: 4,
            title: t("steps.kyc.title"),
            description: t("steps.kyc.subtitle"),
            href: "/register/kyc",
        },
    ];

    return (
        <section className="w-3/4 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 py-6 md:py-7 px-6 md:px-10 my-6">
            <div className="text-center mb-6">
                <h2 className="font-extrabold text-text-primary text-[18px] md:text-[20px]">
                    {t("stepsTitle")}
                </h2>

                <div className="relative w-[40px] md:w-[114px] mx-auto mt-4">
                    <span className="block h-px w-full bg-[#C5A377]" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-1px h-[3px] w-12 bg-secondary rounded-full" />
                </div>
            </div>

            <ul className="flex flex-row items-center justify-between gap-3 md:gap-4">
                {steps.map((step, idx) => {
                    const status = step.id < currentStep ? "done" : "todo";

                    const item = (
                        <li className="flex items-center gap-3">
                            <StepNumber number={step.id} status={status} />

                            <div className="text-right">
                                <h3 className="font-bold text-text-primary text-[14px] md:text-[15px] leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-[11px] md:text-xs text-text-third font-medium mt-1">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    );

                    return (
                        <span key={step.id} className="contents">
                            {step.id === 1 ? (
                                <Link href={step.href} className="contents">
                                    {item}
                                </Link>
                            ) : (
                                item
                            )}

                            {idx !== steps.length - 1 && (
                                <span className="h-px bg-secondary/50 w-8 md:w-14 lg:w-20 shrink-0" />
                            )}
                        </span>
                    );
                })}
            </ul>
        </section>
    );
}
