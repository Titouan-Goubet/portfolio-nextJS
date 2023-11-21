import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Titouan. Tout droits réservés.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Au sujet de cette application :</span> construit avec React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email, Resend et hébergé avec Vercel.
      </p>
    </footer>
  );
}
