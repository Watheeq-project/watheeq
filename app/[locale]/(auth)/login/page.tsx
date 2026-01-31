import {useTranslations} from "next-intl";


import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import LoginLogo from "./LoginLogo";

export default function Home() {
    const t = useTranslations("login")
  return (
     <div className="pb-6">
      <div className="px-35.5 flex items-center flex-col justify-center pt-39 pb-[89px] ">
        <LoginLogo />
      <LoginHeader />
      <LoginForm />
      </div>
      <LoginFooter />
    </div>
  );
}
