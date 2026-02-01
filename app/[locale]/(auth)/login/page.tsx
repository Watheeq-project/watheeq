import {useTranslations} from "next-intl";
import LoginLogo from "./LoginLogo";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";


export default function Home() {
    const t = useTranslations("login")
  return (
   <div className="pb-6">
      <div className="flex items-center flex-col justify-center pt-39  ">
        <LoginLogo />
      <LoginHeader />
      <LoginForm />
      </div>
      {/* <LoginFooter /> */}
    </div>
  );
}
