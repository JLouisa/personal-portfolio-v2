import { useRef, FormEvent } from "react";
import { sendEmail } from "../utils/sendMail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>();

  const prepEmail = async (e: FormEvent) => {
    e.preventDefault();
    toast.promise(theToast(e), {
      pending: "Processing your message",
      success: "Message received! 👌",
      error: "Something went wrong, please try again. 🤯",
    });
  };

  const theToast = (e: FormEvent) => {
    return sendEmail(formRef.current, e);
  };

  return (
    <section className="contact" id="contact">
      <ToastContainer />
      <h2 className="heading">
        Contact <span>Me</span>
        <span className="bg-text bg-color2">Contact Me</span>
      </h2>
      <form ref={formRef} onSubmit={(e) => prepEmail(e)}>
        <div className="input-box">
          <input type="text" id="name" name="name" autoComplete="false" placeholder="Full Name" required />
          <input type="email" id="email" name="email" autoComplete="false" placeholder="Email address" required />
        </div>
        <div className="input-box">
          <input type="number" id="mobile" name="mobile" autoComplete="false" placeholder="Mobile Number" required />
          <input type="text" id="subject" name="subject" placeholder="Email subject" required />
        </div>
        <textarea
          name="message"
          id="messageTextarea"
          cols={30}
          rows={10}
          placeholder="Your message"
          required
        ></textarea>
        <input type="submit" id="contactSubmitBtn" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
