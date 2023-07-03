import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
       <div className="py-4 bg-[#2c2b2b]">
         <div className="my-container">
           <div className="flex justify-around md:justify-between">
           <h1 className="font-bold text-2xl md:3xl text-white">Hasibul Hasan</h1>
           <div className="md:hidden" onClick={()=>setOpen(!open)}>
            <FaBars className="text-xl"></FaBars>
           </div>
            <div className={`absolute md:static transform duration-500 py-3 md:py-0 ${open? 'top-14 right-6 px-4 bg-slate-900 md:bg-[#2c2b2b]' : '-top-44 right-0'}`}>
                    <ul className="menu-bar">
                        <li><NavLink to='#home'>Home</NavLink> </li>
                        <li><a href='#about'>About</a> </li>
                        <li><a href='#projects'>Projects</a> </li>
                        <li><a href='#skills'>Skills</a> </li>
                        <li><a href='#contact'>Contact</a></li>
                        <li className="py-2 px-4 rounded-xl bg-[#0ef] text-white mt-1 md:mt-0"><a href="../../public/Resume of Hasibul Hasan Web Developer.pdf" download>Resume</a></li>
                    </ul>
            </div>
           </div>
        </div>
       </div>
    );
};

export default Navbar;