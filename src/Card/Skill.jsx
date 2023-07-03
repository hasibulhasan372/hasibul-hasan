import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const Skill = ({skill}) => {
    return (
       <div>
         <div  className="skill-ring">
        <CircularProgressbar value={skill.level} text={`${skill.level}%`}
        styles={buildStyles({ 
            
            textSize: '22px',
            strokeLinecap: 'butt',
            rotation: 0.25,
            backgroundColor: '#000',
            pathColor: '#0ef',
        })}
        
        />
      </div>
      <h2 className="mt-2 capitalize text-lg font-semibold">{skill.skill}</h2>
       </div>
    );
};

export default Skill;