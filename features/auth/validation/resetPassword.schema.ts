import { z } from "zod";

export const resetPasswordSchema = z
    .object({
        newPassword: z.string().min(8),
        confirmPassword: z.string().min(8),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        path: ["confirmPassword"],
    });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
