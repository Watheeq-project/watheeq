import { z } from "zod";

export const verifyOtpSchema = (messages: {
    otpRequired: string;
    otpInvalid: string;
}) =>
    z.object({
        otp: z
            .string()
            .min(6, messages.otpRequired)
            .regex(/^\d{6}$/, messages.otpInvalid),
    });

export type VerifyOtpFormValues = z.infer<ReturnType<typeof verifyOtpSchema>>;
