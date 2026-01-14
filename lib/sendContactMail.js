import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMail({
firstName,
lastName,
email,
phone,
message,
eventType
}) {
  console.log("Ok");
  return <></>;
  // return resend.emails.send({
    // from: "Katerina Tzova Cinematography Website <no-reply@katerina-tzova.gr>",
    // to: ["g.seretakos@gmail.com",],
    // replyTo: email,
    // subject: "Website: ΑΙΤΗΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ",
    // html: `
    //   <h2>Νέο Αίτημα Επικοινωνίας</h2>
    //   <p><strong>Όνομα:</strong> ${firstName} ${lastName}</p>
    //   <p><strong>Email:</strong> ${email}</p>
    //   <p><strong>Τηλέφωνο:</strong> ${phone}</p>
    //   <p><strong>Τύπος Εκδήλωσης:</strong> ${eventType}</p>
    //   <hr />
    //   <p><strong>Μήνυμα:</strong></p>
    //   <p>${message.replace(/\n/g, "<br />")}</p>
    // `,
  // });
}
