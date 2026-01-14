"use server";

import { sendContactMail } from "../../../lib/sendContactMail";
import { redirect } from "next/navigation";

export async function sendContactForm(formData) {
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const eventType = formData.get("event_type");
  const message = formData.get("message");

  if (!email || !message) {
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
