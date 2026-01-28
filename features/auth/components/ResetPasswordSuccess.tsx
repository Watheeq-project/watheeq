"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ResetPasswordSuccess() {
    const t = useTranslations("resetPasswordSuccess");

    return (
        <div className="w-full">
            <div className="flex items-start gap-8">
                <div className="shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#48B452]">
                        <Image src="/icons/check.png" alt="" width={38} height={38} />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-extrabold text-[#1B1B1B]">
                        {t("title")}
                    </h1>

                    <p className="mt-2 text-base text-[#A5A5A5]">
                        {t("description")}
                    </p>
                </div>
            </div>
            <Button
                asChild
                className="mt-8 h-12 w-full rounded-lg bg-[#C5A377] text-[#FFFFFF]"
            >
                <Link href="/login">{t("login")}</Link>
            </Button>
        </div>
    );
}
