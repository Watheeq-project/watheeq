import { z } from "zod";
export const forgotPasswordSchema = (errorMessage: string) =>
    z.object({
        phone: z.string().regex(/^5\d{8}$/, errorMessage),
    });

export type ForgotPasswordFormValues = z.infer<
    ReturnType<typeof forgotPasswordSchema>
>;
