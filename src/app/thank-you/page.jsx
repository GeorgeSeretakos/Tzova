import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="text-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4">
        Thank you for your message!
      </h1>
      <p className="mb-6">
        Θα σας απαντήσουμε το συντομότερο δυνατό.
      </p>
      <Link
        href="/"
        className="text-[#D4AF37] underline hover:text-[#D4AF37] transition"
      >
        Επιστροφή στην αρχική σελίδα
      </Link>
    </main>
  );
}
