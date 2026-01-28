import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ResetPassword() {
  const t = useTranslations("resetPassword");
  const locale = useLocale();

  const Icon = locale === "en" ? ArrowLeft : ArrowRight;

  return (
    <div className="w-full">
      <div className="mb-10">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-[#1B1B1B] hover:opacity-80"
        >
          <Icon size={18} strokeWidth={1.8} />
          {t("back")}
        </Link>
      </div>

      <h1 className="text-3xl font-extrabold text-[#071638] text-start">
        {t("title")}
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#A5A5A5] text-start">
        {t("description")}
      </p>

      <div className="mt-8">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
