import img1 from "@/public/image1.jpeg"
import Image from "next/image"
function LoginHero() {
  return (
    <div className="relative text-right ">
      <Image src={img1} alt="Hero Image" width={1000} height={1000} className="w-full h-full min-h-screen    " />
      <div className=" absolute top-1/2 right-0 -translate-y-1/2 mr-8 w-[489px]">
      <h2 className="text-[32px] font-bold text-white h-15 mb-1.5 font-cairo">
       مرحبًا بكم في منصة وثيق المالية
      </h2>
      <p className="text-white font-normal h-11 text-[14px] ">
        تسعى وثيق لتصبح الشريك المالي والاستثماري المفضل للراغبين بالحصول على فرص استثمارية متنوعة وخدمات مالية متكاملة متوافقة مع أحكام الشريعة الإسلامية
      </p>

      </div>
      <p className=" absolute bottom-0 mb-6 ml-4 text-white text-[14px]">© جميع الحقوق محفوظة -منصة وثيق المالية 2024</p>
    </div>
  )
}

export default LoginHero