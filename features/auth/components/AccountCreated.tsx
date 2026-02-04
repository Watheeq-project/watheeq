import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";
import danger from "../../../public/icons/danger AccountCreated.png";
import OnlineDataAccess from "../../../public/images/Online data access.png";
import info from "../../../public/icons/info-circle.png";

export default async function AccountCreated() {
    const t = await getTranslations("registerAccountCreated");

    return (
        <section className="w-3/4 mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-25 py-10 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src={OnlineDataAccess}
                            alt="account-created"
                            width={520}
                            height={420}
                            priority
                        />
                    </div>
                    <div className="text-center lg:text-start">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#071638]">
                            {t("title")}
                        </h1>

                        <p className="mt-3 text-sm md:text-base text-[#7A7A7A] leading-7">
                            {t("description")}
                        </p>

                        <div className="mt-6">
                            <Link
                                href="/login"
                                className="inline-flex items-center justify-center h-12 px-10 rounded-lg bg-[#C9A46A] text-white font-bold hover:opacity-90"
                            >
                                {t("login")}
                            </Link>
                        </div>

                        <div className="mt-10 rounded-xl border border-[#E7E7E7] p-6">
                            <div className="flex items-start gap-3">
                                <Image src={danger} alt="danger" width={22} height={22} />
                                <div className="text-start">
                                    <h3 className="text-base font-bold text-[#1B1B1B]">
                                        {t("beforeYouStartTitle")}
                                    </h3>

                                    <ul className="mt-4 space-y-3 text-sm text-[#7A7A7A]">
                                        <li>• {t("checklist.nationalId")}</li>
                                        <li>• {t("checklist.nationalAddress")}</li>
                                        <li>• {t("checklist.bankAccount")}</li>

                                        <li className="flex items-center gap-2">
                                            <span>• {t("checklist.eligibility")}</span>
                                            <Image src={info} alt="info" width={14} height={14} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="mt-6 mb-4 flex items-center justify-between gap-4">
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
        </section>
    );
}
