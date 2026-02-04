"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import repeatAr from "../../../public/icons/repeat nafath ar.png";
import repeatEn from "../../../public/icons/repeat nafath en.png";

function formatSeconds(total: number) {
    const m = Math.floor(total / 60);
    const s = total % 60;
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");
    return `${mm}:${ss}`;
}

export default function NafathVerification() {
    const t = useTranslations("registerNafath");
    const locale = useLocale();
    const isAr = locale === "ar";

    const [seconds, setSeconds] = useState(58);

    useEffect(() => {
        if (seconds <= 0) return;
        const id = setInterval(() => setSeconds((s) => s - 1), 1000);
        return () => clearInterval(id);
    }, [seconds]);

    const code = "5";
    const canResend = seconds <= 0;

    const repeatIcon = useMemo(
        () => (isAr ? repeatAr : repeatEn),
        [isAr]
    );

    return (
        <section className="w-3/4 mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-10 py-10 md:py-12">
                <div className="flex flex-col items-center text-center">
                    <div className="w-[92.78px] h-[100px] rounded-2xl bg-[#2E9B8F] flex items-center justify-center text-white text-3xl font-extrabold">
                        {t("nafath")}
                    </div>

                    <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-[#071638]">
                        {t("title")}
                    </h1>

                    <p className="mt-3 text-sm md:text-base text-[#7A7A7A] leading-7 max-w-[560px]">
                        {t("desc")}
                    </p>

                    <div className="mt-8 w-[74px] h-[74px] rounded-lg bg-[#F2F2F2] flex items-center justify-center text-2xl font-bold text-[#1B1B1B]">
                        {code}
                    </div>

                    <p className="mt-4 text-sm text-[#1B1B1B]">
                        {t("expires")}{" "}
                        <span dir="ltr" className="font-semibold">
                            {formatSeconds(seconds)}
                        </span>
                    </p>

                    <button
                        type="button"
                        disabled={!canResend}
                        onClick={() => {
                            if (!canResend) return;
                            setSeconds(58);
                        }}
                        className={[
                            "mt-10 inline-flex items-center gap-3",
                            "h-12 px-6 rounded-lg border transition-colors",
                            canResend
                                ? "border-[#C9A46A] text-[#C9A46A] hover:bg-[#C9A46A]/5"
                                : "border-[#E5E5E5] text-[#C9A46A]/40 cursor-not-allowed",
                        ].join(" ")}
                    >
                        <Image
                            src={repeatIcon}
                            alt="repeat"
                            width={18}
                            height={18}
                        />
                        <span className="text-sm font-semibold">
                            {t("resend")}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
