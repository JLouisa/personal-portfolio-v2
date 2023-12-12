import emailjs from "@emailjs/browser";
import { FormEvent } from "react";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const sendEmail = async (info: HTMLFormElement, theE: FormEvent) => {
  console.log("send email");
  return emailjs.sendForm(serviceID, templateID, info, publicKey).then(
    (result) => {
      // @ts-expect-error ts doesn't find the type
      theE.target.reset();
      return result.text;
    },
    (error) => {
      return error.text;
    }
  );
};

export { sendEmail };
