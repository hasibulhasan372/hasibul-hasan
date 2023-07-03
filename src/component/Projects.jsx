import Kid from "../Card/Kid";
import LifeLearning from "../Card/LifeLearning";
import RealHomes from "../Card/RealHomes";


const Projects = () => {
    return (
       <div id="projects" className="bg-[#000000e5]">
         <div className="my-container py-12">
            <h1 className="text-center pb-10 text-4xl font-bold text-[#0ef]">My Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-6">
               

                <LifeLearning></LifeLearning>
                <Kid></Kid>
                <RealHomes></RealHomes>
            </div>
        </div>
       </div>
    );
};

export default Projects;