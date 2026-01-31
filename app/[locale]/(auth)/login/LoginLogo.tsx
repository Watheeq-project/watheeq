import img1 from "@/public/logo.png";
import Image from "next/image";
function LoginLogo() {
  return (
    <Image
      src={img1.src}
      alt="Logo"
      className="w-[231px] h-[90px] mb-4"
      width={100}
      height={100}
    />
  );
}

export default LoginLogo;
