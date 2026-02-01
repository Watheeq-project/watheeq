import Link from "next/link";
import { StepNumber } from "./StepNumber";
import { steps } from "../constants";

export default function Steps() {
    return (
        <section className="w-3/4 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 py-8 px-4 md:px-12 my-6">
            <div className="text-center mb-10">
                <h2 className="steps-title">
                    خطوات تسجيل حساب جديد لدي منصة وثيق المالية
                </h2>
            </div>

            <ul className="flex flex-row-reverse justify-between items-center gap-6 md:gap-4 relative">
                {steps.map((step) => {
                    const StepContent = (
                        <li key={step.id} className="flex items-center gap-3 relative z-10 w-full md:w-auto justify-center">
                            <div className="text-right">
                                <h3 className="font-bold text-text-primary text-[15px] leading-tight mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-text-third font-medium mt-3">
                                    {step.description}
                                </p>
                            </div>
                            <StepNumber number={step.id} />
                        </li>
                    );

                    // Add navigation to step 1 (account details)
                    if (step.id === 1) {
                        return (
                            <Link key={step.id} href="/register/account-details" className="contents">
                                {StepContent}
                            </Link>
                        );
                    }

                    return StepContent;
                })}
            </ul>
        </section>
    );
}