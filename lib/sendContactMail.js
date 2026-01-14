import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMail({
  firstName,
  lastName,
  email,
  phone,
  message,
  eventType,
}) {
  return resend.emails.send({
    from: "Katerina Tzova Website <no-reply@katerinatzova.gr>",
    to: [
      "g.seretakos@gmail.com",
      // "katerinatzova@gmail.com",
    ],
    replyTo: email,
    subject: "Website: Αίτημα Επικοινωνίας",
    html: `
      <h2>Νέο Αίτημα Επικοινωνίας</h2>
      <p><strong>Όνομα:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Τηλέφωνο:</strong> ${phone}</p>
      <p><strong>Τύπος Εκδήλωσης:</strong> ${eventType}</p>
      <hr />
      <p><strong>Μήνυμα:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
