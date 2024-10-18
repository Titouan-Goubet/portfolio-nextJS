"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 100)) {
    return {
      error: "Mauvais domaine de messagerie",
    };
  }
  if (!validateString(message, 1000)) {
    return {
      error: "Message invalide",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Message depuis <onboarding@resend.dev>",
      to: process.env.EMAIL!,
      subject: "Message depuis le formulaire de contact du portfolio",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
