import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div id="home">
            <Navbar></Navbar>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;