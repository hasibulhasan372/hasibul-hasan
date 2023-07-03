import {  FaAddressCard, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../Card/ContactForm";

const Contact = () => {
    return (
        <div className="my-container py-12">
            <h1 className="text-center pb-10 text-4xl font-bold text-[#0ef]">Contact Me</h1>
            <div className="grid md:grid-cols-2">
                <div className="space-y-3">
                    <h3>Address</h3>
                    <div className="flex gap-2 items-center">
                        <FaEnvelope></FaEnvelope>
                        <h2 className="">hasibulhasan372@gmail.com</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaPhoneAlt></FaPhoneAlt>
                        <div>
                        <h2 className="">+880 1747-619388</h2>
                        <h2 className="">+880 1747-619388</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaAddressCard></FaAddressCard>
                        <h2 className="">Dhaka, Bangladesh</h2>
                    </div>
                </div>
                <div>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;