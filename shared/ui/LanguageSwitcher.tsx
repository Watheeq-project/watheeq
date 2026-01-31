"use client";


import { useLocale } from "next-intl";
import { useTransition } from "react";
import {useRouter , usePathname} from "@/i18n/navigation";

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const activeLocale = useLocale();

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex gap-2">
            <select
                defaultValue={activeLocale}
                disabled={isPending}
                onChange={(e) => onSelectChange(e.target.value)}
                className="bg-transparent border border-border rounded px-2 py-1 cursor-pointer disabled:opacity-50"
            >
                <option value="en">English 🇺🇸</option>
                <option value="ar">العربية 🇪🇬</option>
            </select>
        </div>
    );
}