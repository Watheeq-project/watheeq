import Image from "next/image";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";

export default async function AuthLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const t = await getTranslations("authLayout");

  return (
    <div className="h-screen w-full overflow-hidden bg-white">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        <section
          className={`relative hidden overflow-hidden lg:block ${isAr ? "lg:order-2" : "lg:order-1"
            }`}
        >
          <Image
            src="/images/auth-bg.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#071638]/55" />

          <div className="absolute inset-0 flex flex-col justify-center px-14">
            <h2 className="text-4xl font-extrabold leading-tight text-white">
              {t("welcomeTitle")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              {t("welcomeDescription")}
            </p>

            <p className="absolute bottom-8 start-10 text-sm text-white/70">
              {t("copyright")}
            </p>
          </div>
        </section>

        <section
          className={`relative flex h-full flex-col overflow-hidden ${isAr ? "lg:order-1" : "lg:order-2"
            }`}
        >
          <main className="flex flex-1 min-h-0 items-center justify-center px-6 py-4">
            <div className="w-full max-w-[820px]">{children}</div>
          </main>

          <footer className="shrink-0 px-6 py-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">


              <nav className="flex items-center gap-6 text-sm text-[#1B1B1B]">
                <a href="#" className="hover:opacity-80">
                  {t("contact")}
                </a>
                <a href="#" className="hover:opacity-80">
                  {t("about")}
                </a>
                <a href="#" className="hover:opacity-80">
                  {t("terms")}
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
