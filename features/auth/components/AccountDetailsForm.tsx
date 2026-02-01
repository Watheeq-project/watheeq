"use client";

import Image from "next/image";


export default function AccountDetailsForm() {

    return (
        <div className="w-3/4 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 py-8 px-6 md:px-12">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    اختر نوع الحساب الاستثماري ثم املأ البيانات المطلوبة
                </h1>
            </div>
            {/* Account Type Tabs */}
            <div className="flex gap-4 mb-8 justify-center border border-gray-100 p-1 rounded-lg">
                <button
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-secondary/6 text-secondary"
                >
                    <Image src="/images/register/company.svg" alt="company" width={24} height={24} />
                    <span>شركات</span>
                </button>
                <button
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-text-third`}
                >
                    <Image src="/images/register/people.svg" alt="people" width={24} height={24} />
                    <span>الأفراد</span>
                </button>
            </div>
            {/* Form */}
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Commercial Registration Number */}
                    <div className="text-right">
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                            رقم السجل التجاري
                        </label>
                        <input
                            type="text"
                            placeholder="ادخل السجل التجاري"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    {/* ID Number */}
                    <div className="text-right">
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                            رقم الهوية
                        </label>
                        <input
                            type="text"
                            placeholder="ادخل رقم الهوية"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div className="text-right">
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                            البريد الإلكتروني
                        </label>
                        <input
                            type="email"
                            placeholder="ادخل البريد الإلكتروني"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    {/* Birth Date */}
                    <div className="text-right">
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                            تاريخ الميلاد
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ادخل تاريخ الميلاد"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <Image
                                src="/images/register/calendar.svg"
                                alt="calendar"
                                width={20}
                                height={20}
                                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Password Field */}
                <div className="text-right">
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                        كلمة المرور
                    </label>
                    <input
                        type="password"
                        placeholder="ادخل كلمة المرور"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>

                <div className="space-y-2 text-right text-sm text-gray-600">
                    <p className="flex items-center gap-2 justify-end">
                        <span>يجب أن تحتوي كلمة المرور صغيرة من 8 أحرف على الأقل</span>
                        <input type="radio" className="form-radio text-primary" disabled />
                    </p>
                    <p className="flex items-center gap-2 justify-end">
                        <span>يجب أن تحتوي كلمة المرور على حرف كبير</span>
                        <input type="radio" className="form-radio text-primary" disabled />
                    </p>
                    <p className="flex items-center gap-2 justify-end">
                        <span>يجب أن تحتوي كلمة المرور على أحرف صغيرة</span>
                        <input type="radio" className="form-radio text-primary" disabled />
                    </p>
                    <p className="flex items-center gap-2 justify-end">
                        <span>يجب أن تحتوي كلمة المرور على رقم مثل @!&*#$%</span>
                        <input type="radio" className="form-radio text-primary" disabled />
                    </p>
                </div>

                <div className="flex gap-1 justify-end items-center">
                    <label htmlFor="terms" className="text-sm text-gray-700">
                        أقر بموافقتي على وثيق المالية بالحصول على معلوماتي من مزود البيانات الوطني
                    </label>
                    <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="w-1/2 bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-6 rounded-lg"
                >
                    التالي
                </button>
                </div>
            </form>
        </div>
    );
}

