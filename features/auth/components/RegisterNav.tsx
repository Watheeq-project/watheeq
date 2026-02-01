import Image from "next/image";
import Steps from "./Steps";

export default function RegisterNav() {
    return (
        <div>
            <div className="relative h-[174px]">
                <Image className="object-cover" src="/images/register/register-nav.svg" alt="register-nav" fill />
            </div>
            <div className="-mt-20 relative z-10 px-4 md:px-0">
                <Steps />
            </div>
        </div>
    );
}

