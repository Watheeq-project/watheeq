import VerifyOtpForm from "../../../../features/auth/components/VerifyOtpForm";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function VerifyOtpPage() {
    const t = useTranslations("verifyOtp");
    const locale = useLocale();

    const Icon = locale === "en" ? ArrowLeft : ArrowRight;

    return (
        <div className="w-full">
            <div className="mb-10">
                <Link
                    href="/forgot-password"
                    className="inline-flex items-center gap-2 text-sm text-[#1B1B1B] hover:opacity-80"
                >
                    <Icon size={18} strokeWidth={1.8} className="text-[#000000]" />
                    {t("back")}
                </Link>
            </div>

            <h1 className="text-3xl font-extrabold text-[#071638] text-start">
                {t("title")}
            </h1>

            <div className="mt-3 text-start text-sm leading-6 text-[#A5A5A5] space-y-1">
                <p>{t("subtitle")}</p>
                <p className="text-xs">{t("maskedPhone")}</p>
            </div>

            <div className="mt-8">
                <VerifyOtpForm initialSeconds={60} />
            </div>
        </div>
    );
}
