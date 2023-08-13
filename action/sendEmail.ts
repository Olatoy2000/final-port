"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
// instaciating resend
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invaid message",
    };
  }
  try {
    // then we can use the resend variable to send an email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "olatoyconsult@gmail.com",
      subject: "message from contact form",
      text: message as string,
      reply_to: senderEmail as string,
    });
  } catch (error: any) {
   return {
    error: error.message
   }
  }
};
