"use server";

import { sendContactMail } from "@/lib/sendContactMail";
import { redirect } from "next/navigation";

export async function sendContactForm(formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const eventType = formData.get("eventType");
  const message = formData.get("message");

  if (!email || !phone) {
    throw new Error("Invalid form submission");
  }

  await sendContactMail({
    firstName,
    lastName,
    email,
    phone,
    eventType,
    message,
  });

  redirect("/thank-you");
}
