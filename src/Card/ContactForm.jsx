
import { useForm } from "react-hook-form";
const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name" className="block pb-2">
                    Name
                </label>
                <input {...register("name", { required: true })} className="py-2 border rounded-lg lg:w-4/6" />
            </div>
            <div className="py-4">
                <label htmlFor="email" className="block pb-2">Email</label>
                <input {...register("email", { required: true })} className="py-2 border rounded-lg lg:w-4/6" />
            </div>
            <div className="">
                <label htmlFor="email" className="block pb-2">Message</label>
                <textarea {...register("message", { required: true })}  rows="4" className="py-2 border rounded-lg lg:w-4/6" />
            </div>
            <input type="submit" className="border py-2 rounded-xl w-3/6 mt-4 bg-[#0ef] text-white font-bold" />
        </form>
    );
};

export default ContactForm;