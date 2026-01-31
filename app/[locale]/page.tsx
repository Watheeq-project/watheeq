import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage")
    return (
      <main className="p-8">
        <h1 className="text-4xl font-bold"> {t("title")}</h1>
        <p className="mt-4 text-gray-600">Home Page</p>
      </main>
    );
  }