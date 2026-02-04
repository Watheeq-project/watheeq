import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import LoginBrand from "../../../../features/auth/components/LoginBrand";
import LoginHeader from "../../../../features/auth/components/LoginHeader";
import LoginForm from "../../../../features/auth/components/LoginForm";

export default function LoginPage() {
  const t = useTranslations("login");

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <LoginBrand />

        <div className="mt-2 w-full">
          <LoginHeader title={t("title")} subtitle={t("subtitle")} />

          <div className="mt-5 rounded-[8px] border border-[#EEEEEE] bg-white p-5 shadow-sm">
            <LoginForm />
          </div>

          <div className="mt-3 text-center text-[14px] font-medium">
            <span className="text-[#1B1B1B]">{t("noAccount")}</span>{" "}
            <Link href="/register" className="text-[#2A73FF] hover:opacity-80">
              {t("register")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
