import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <div className="bg-[#2c2b2b]" id="about">
            <div className="my-container">
                <div className="py-20  md:flex items-center justify-around text-white">

                    <div className="space-y-2 md:space-y-4 text-center">
                        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold"> My name is <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#0ef] font-bold">Md. Hasibul Hasan</span></h1>
                        {/* <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold">I am a <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#3ee6f2] font-bold">MERN Stack Developer</span></h3> */}
                        <p className="text-lg md:text-2xl font-semibold">I am a MERN Stack Developer. I have done several projects on different perspective. The enthusiasm about Web Development push me to build my  career in IT section as a Web Developer.</p>
                        <div className="mt-3">
                            <a href="../../public/Resume of Hasibul Hasan Web Developer.pdf" download
                                className="py-2 px-4 rounded-xl bg-[#0ef] text-white text-lg font-semibold"
                            >Resume</a>
                        </div>

                    </div>
                    <div>
                        <img src="https://i.ibb.co/pQJSrt8/Profile-Photo-removebg-preview.png" alt="" className="lg:w-[870px]" />
                        <div className="flex gap-4 items-center justify-center mt-3">
                            <a className="  border-[#0ef] border-[2px] rounded-full p-2"
                                href="https://www.facebook.com/hasibul.hasan.3304" target="_black"><FaFacebookF></FaFacebookF></a>
                            <a className=" border-[2px] border-[#0ef] rounded-full p-2"
                                href="https://www.linkedin.com/in/md-hasibul-hasan-2b8a77111" target="_black"><FaLinkedinIn></FaLinkedinIn></a>
                            <a className=" border-[2px] border-[#0ef] rounded-full p-2"
                                href="https://github.com/hasibulhasan372" target="_black"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;