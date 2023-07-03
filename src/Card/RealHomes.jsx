

const RealHomes = () => {
    return (
        <div className="project-box">
            <div className=" w-full rounded-xl">
                <img src="https://i.ibb.co/gDtjKD7/Real-Homes.png" alt="" className=" project-img "
                />
                <span className="project-name">Real Homes</span>
            </div>
            <span className="img-overly"></span>
            <div className="project-details ">
                <div className="mt-3">
                    <h2 className="font-bold text-2xl text-center pb-4">Real Homes</h2>
                    <p>Real Homes is a website of Real State. People can upload their property and sell it it to the custom. Different types of category a customer will find in this site. This is website is mainly font end base and no backend used for it. In Property listing page user can find property with details. And Property type page customer will see different type of properties. </p>
                    <p className="pt-4"><span className="font-bold text-lg">Technologies:</span> HTML5 | CSS | Bootstrap | jQuery | JavaScript | CounterUp | Veno Box | Light Box | Slick Slider | </p>
                </div>
                <div className="mt-3 md:mt-4 flex justify-between ">
                    <a href="https://realhomes.hasibulhasansanto.com" target="_black"
                        className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                    >Live Link</a>
                    <div className=" space-x-5 flex ">
                        <h4 className="font-bold">Github: </h4>
                        <a href="https://github.com/hasibulhasan372/real-homes-arch" target="_black"
                            className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                        >Client</a>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealHomes;