"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import PasswordField from "./PasswordField";
import { Button } from "@/components/ui/button";

import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "@/features/auth/validation/resetPassword.schema";

export default function ResetPasswordForm() {
  const t = useTranslations("resetPasswordForm");
  const te = useTranslations("errors");

  const defaultValues = useMemo<ResetPasswordFormValues>(
    () => ({ newPassword: "", confirmPassword: "" }),
    []
  );

  const schema = useMemo(
    () =>
      resetPasswordSchema({
        newPasswordMin: te("newPasswordMin"),
        confirmPasswordMin: te("confirmPasswordMin"),
        passwordsMismatch: te("passwordsMismatch"),
      }),
    [te]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    console.log("reset-password submit", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <PasswordField
        label={t("newPassword")}
        placeholder={t("placeholder")}
        {...register("newPassword")}
        error={errors.newPassword?.message}
      />

      <PasswordField
        label={t("confirmPassword")}
        placeholder={t("placeholder")}
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        className="h-11 w-full rounded-lg bg-[#C5A377] text-[#FFFFFF] cursor-pointer"
        disabled={isSubmitting}
      >
        {t("submit")}
      </Button>
    </form>
  );
}
