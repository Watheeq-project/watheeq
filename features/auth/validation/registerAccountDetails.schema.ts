import { z } from "zod";

export type RegisterAccountType = "users" | "company";

export type RegisterAccountDetailsValues = {
    phone: string;
    idNumber: string;
    birthDate: string;
    email: string;
    password: string;
    acceptNationalData: boolean;
};

const SAUDI_ID_REGEX = /^[12]\d{9}$/;

const BIRTH_DATE_REGEX = /^(\d{4}-\d{2}-\d{2}|\d{2}[\/\-]\d{2}[\/\-]\d{4})$/;

export const registerAccountDetailsSchema = (messages: {
    phoneInvalid: string;
    idNumberInvalid: string;
    birthDateInvalid: string;
    invalidEmail: string;
    passwordRules: string;
    acceptRequired: string;
}) =>
    z.object({
        phone: z.string().min(9, messages.phoneInvalid).regex(/^\d{9}$/, messages.phoneInvalid),

        idNumber: z.string().min(10, messages.idNumberInvalid).regex(SAUDI_ID_REGEX, messages.idNumberInvalid),

        birthDate: z.string().min(1, messages.birthDateInvalid).regex(BIRTH_DATE_REGEX, messages.birthDateInvalid),

        email: z.string().email(messages.invalidEmail),

        password: z
            .string()
            .min(8, messages.passwordRules)
            .refine((v) => /\d/.test(v), messages.passwordRules)
            .refine((v) => /[A-Z]/.test(v), messages.passwordRules)
            .refine((v) => /[a-z]/.test(v), messages.passwordRules)
            .refine((v) => /[@$!%*#?&]/.test(v), messages.passwordRules),

        acceptNationalData: z.boolean().refine((v) => v === true, messages.acceptRequired),
    });
