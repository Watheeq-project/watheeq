import NafathVerification from "../../../../features/auth/components/NafathVerification";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NafathPage() {
    const t = await getTranslations("registerAccountCreated");

    return (
        <div className="container mx-auto px-4 py-8">
            <NafathVerification />

            <div className="mt-6 flex items-center justify-between gap-4">
                <div className="w-[180px]" />
                <p className="flex-1 text-center text-sm text-gray-600">
                    <span>{t("alreadyHaveAccount")} </span>
                    <Link href="/login" className="font-semibold text-[#2A73FF] hover:underline">
                        {t("loginLink")}
                    </Link>
                </p>

                <div className="w-[180px] flex items-center justify-end gap-4">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
}
