import { z } from "zod";

export const resetPasswordSchema = (messages: {
  newPasswordMin: string;
  confirmPasswordMin: string;
  passwordsMismatch: string;
}) =>
  z
    .object({
      newPassword: z.string().min(8, messages.newPasswordMin),
      confirmPassword: z.string().min(8, messages.confirmPasswordMin),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: messages.passwordsMismatch,
      path: ["confirmPassword"],
    });

export type ResetPasswordFormValues = z.infer<
  ReturnType<typeof resetPasswordSchema>
>;
