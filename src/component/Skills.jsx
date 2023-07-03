import { useEffect, useState } from "react";
import Skill from "../Card/Skill";


const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        fetch("skills.json")
        .then(res => res.json())
        .then(data => setSkills(data))
    },[])

    return (
        <div className="my-container py-12">
            <h1 className="text-center pb-10 text-4xl font-bold text-[#0ef]">Skills</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
                    {
                        skills.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                        ></Skill>)
                    }
                </div>
        </div>
    );
};

export default Skills;