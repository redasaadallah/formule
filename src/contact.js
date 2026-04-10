import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xzwwpwb",       // replace
      "template_rv08hib",      // replace
      form.current,
      {
        publicKey: "tgwVrKeAfBzIYfzWm", // replace
      }
    )
    .then(() => {
      alert("Votre demande a bien été envoyée. Nous vous répondrons dans les plus brefs délais.");
    })
    .catch((error) => {
      console.log(error);
      alert("Erreur lors de l'envoi");
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Nom" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />

      <button type="submit">Envoyer</button>
    </form>
  );
}
