import Image from "next/image";

export default function LoginBrand() {
    return (
        <div className="flex items-center justify-center">
            <Image
                src="/images/brand-login.png"
                alt="Watheeq Capital"
                width={231.23}
                height={90}
                priority
                className="h-auto mt-3 max-w-[160px]"
            />
        </div>
    );
}
