import { z } from "zod";

export type LoginMode = "users" | "company";

export type LoginFormValues = {
    phone: string;
    password: string;
};

export const loginSchema = (messages: {
    phoneInvalid: string;
    passwordMin: string;
}) =>
    z.object({
        phone: z.string().min(9, messages.phoneInvalid).regex(/^\d{9}$/, messages.phoneInvalid),
        password: z.string().min(6, messages.passwordMin),
    });
