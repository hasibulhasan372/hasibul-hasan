

const LifeLearning = () => {
    return (
        <div className="project-box">
                <div className=" w-full">
                <img src="https://i.ibb.co/D8nsF9J/Screenshot-2023-07-02-at-20-33-18-Life-Learning.png" alt="" className=" project-img "
                />
                <span className="project-name">Life Learning</span>
                </div>
                <span className="img-overly"></span>
               <div className="project-details ">
               <div className="md:mt-3">
                    <h2 className="font-bold text-2xl text-center pb-4">Life Learning</h2>
                    <p>This is a Language Learning Website for the students who are wanted to learn another languages.An Instructor can add a course by a add form and see the enrolled students and rest of seats and course status. Only Admin can make instructor or admin to another user and approve or deny the courses of instructors. </p>
                    <p className="pt-4"><span className="font-bold text-lg">Technologies:</span> Vite | NodeJS | ExpressJS | Tailwind | daisyUI | MongoDB | Firebase | JWT | Axios | React Awesome Reveal | Stripe | TanStack Query | React Icons | React Hot Toast</p>
                </div>
                <div className="mt-3 md:mt-4 flex justify-between ">
                        <a href="https://life-learning-1c9d9.web.app" target="_black"
                         className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                         >Live Link</a>
                        <div className=" space-x-5 flex ">
                            <h4 className="font-bold">Github: </h4>
                        <a href="https://github.com/hasibulhasan372/life-learning-client" target="_black"
                         className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                         >Client</a>
                        <a href="https://github.com/hasibulhasan372/life-learning-server" target="_black"
                         className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                         >Server</a>
                        </div>
                </div>
               </div>
            </div>
    );
};

export default LifeLearning;