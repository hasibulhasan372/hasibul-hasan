import emailjs from '@emailjs/browser';
import { useRef } from "react";
const ContactForm = () => {
    const form = useRef();
 

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bf1wy7f', 'template_m5xyy69', form.current, 'KKJFgW2elsyOI3xLT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
        <label className="block pb-2">Name</label>
        <input type="text" name="user_name" placeholder='Your Name' className="py-2 border rounded-lg w-full  lg:w-4/6 placeholder:text-black text-black pl-2" />
        <label className="py-4 block">Email</label>
        <input type="email" name="user_email" placeholder='Your Email' className="py-2 border rounded-lg w-full lg:w-4/6 placeholder:text-black text-black pl-2"/>
        <label className="py-4 block">Message</label>
        <textarea name="message" rows="4" placeholder='Message' className="py-2 border rounded-lg w-full lg:w-4/6 text-black placeholder:text-black pl-2" />
        <input type="submit" value="Send" className="border py-2 rounded-xl w-3/6 mt-4 bg-[#0ef] text-white font-bold" />
      </form>
     
    );
};

export default ContactForm;