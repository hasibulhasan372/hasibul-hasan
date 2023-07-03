import {  FaAddressCard, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../Card/ContactForm";

const Contact = () => {
    return (
        <div className="bg-[#000000e5]" id="contact">
            <div className="my-container py-12">
            <h1 className="text-center pb-10 text-4xl font-bold text-[#0ef]">Contact Me</h1>
            <div className="grid space-y-6 md:grid-cols-2 text-white">
                <div className="space-y-3 px-10 md:px-0 md:pl-20 md:mt-5">
                    <h3 className="font-bold text-lg text-[#0ef]">Address</h3>
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
                <div className="px-10 md:px-0">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;