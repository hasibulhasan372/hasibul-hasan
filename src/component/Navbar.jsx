import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="my-container">
           <div className="flex justify-between">
           <h1>Hasibul Hasan</h1>
            <div>
                    <ul className="menu-bar">
                        <li><NavLink to='/'>Home</NavLink> </li>
                        <li><a href='#about'>About</a> </li>
                        <li><a href='#projects'>Projects</a> </li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
            </div>
           </div>
        </div>
    );
};

export default Navbar;