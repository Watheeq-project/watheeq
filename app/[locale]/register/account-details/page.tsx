import AccountDetailsForm from "@/features/auth/components/AccountDetailsForm";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export default async function AccountDetailsPage() {
    const t = await getTranslations("register");

    return (
        <div className="container mx-auto px-4 py-8">
            <AccountDetailsForm />

            <div className="mt-6 text-center text-sm text-gray-600">
                <span>{t("alreadyHaveAccount")} </span>
                <Link href="/login" className="font-semibold text-[#2A73FF] hover:underline">
                    {t("login")}
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <LanguageSwitcher />
            </div>
        </div>
    );
}
