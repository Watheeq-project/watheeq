"use client";

import { useLocale } from "next-intl";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

type LangOption = {
    locale: "en" | "ar";
    label: string;
    countryCode: string;
};

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const activeLocale = useLocale() as "en" | "ar";

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const options: LangOption[] = useMemo(
        () => [
            { locale: "en", label: "English", countryCode: "US" },
            { locale: "ar", label: "عربي", countryCode: "SA" },
        ],
        []
    );

    const current = options.find((o) => o.locale === activeLocale) ?? options[0];

    const changeLang = (nextLocale: "en" | "ar") => {
        if (nextLocale === activeLocale) {
            setOpen(false);
            return;
        }

        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
            setOpen(false);
        });
    };

    useEffect(() => {
        const onMouseDown = (e: MouseEvent) => {
            if (!wrapperRef.current) return;
            if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    const isArabicActive = activeLocale === "ar";

    return (
        <div ref={wrapperRef} className="relative inline-flex">
            <button
                type="button"
                disabled={isPending}
                onClick={() => setOpen((v) => !v)}
                className="
          inline-flex items-center justify-between
          min-w-[120px]
          bg-transparent border border-border rounded
          px-3 py-2
          cursor-pointer
          disabled:opacity-50
        "
                aria-haspopup="menu"
                aria-expanded={open}
            >
                <span
                    dir={isArabicActive ? "rtl" : "ltr"}
                    className="inline-flex items-center gap-2 "
                >
                    <ReactCountryFlag
                        svg
                        countryCode={current.countryCode}
                        style={{ width: 18, height: 18, borderRadius: 3 }}
                    />
                    <span className="text-sm text-[#A5A5A5]">{current.label}</span>
                </span>

                <ChevronDown
                    className={`
            h-4 w-4 opacity-70
            transition-transform duration-200 text-[#9F9F9F]
            ${open ? "rotate-180" : "rotate-0"}
          `}
                />
            </button>

            {open && (
                <div
                    role="menu"
                    className="
            absolute z-50 bottom-full mb-2 w-full
            rounded border border-border bg-background shadow-sm
          "
                >
                    {options.map((opt) => {
                        const active = opt.locale === activeLocale;
                        const isArabic = opt.locale === "ar";

                        return (
                            <button
                                key={opt.locale}
                                type="button"
                                role="menuitem"
                                dir={isArabic ? "rtl" : "ltr"}
                                onClick={() => changeLang(opt.locale)}
                                disabled={isPending}
                                className={[
                                    "w-full px-3 py-2 text-sm",
                                    "flex items-center justify-between",
                                    "hover:bg-black/5 disabled:opacity-50 cursor-pointer",
                                    active ? "bg-black/5" : "",
                                ].join(" ")}
                            >
                                <span
                                    dir={isArabic ? "rtl" : "ltr"}
                                    className="inline-flex items-center gap-2"
                                >
                                    <ReactCountryFlag
                                        svg
                                        countryCode={opt.countryCode}
                                        style={{ width: 18, height: 18, borderRadius: 3 }}
                                    />
                                    <span>{opt.label}</span>
                                </span>

                                {active && (
                                    <span className="text-xs opacity-60 select-none">✓</span>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
