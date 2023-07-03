

const Kid = () => {
    return (
        <div className="project-box">
            <div className=" w-full">
                <img src="https://i.ibb.co/LnzJLpX/kiddoz-kuddoz-doll-home.png" alt="" className="project-img "
                />
                <span className="project-name">Kiddoz Kuddoz</span>
            </div>
            <span className="img-overly"></span>
            <div className="project-details ">
                <div className="mt-3">
                    <h2 className="font-bold text-2xl text-center pb-4">Kiddoz Kuddoz</h2>
                    <p>A User can see the dolls and view details of a doll by login and after login it redirect the destination. After login a Seller can add a toy for sell and see their own added toys and can also update the information. User can search their toys by name and twenty toys will show and see all toys button. Seller can be sorting their toys by higher and lower price. </p>
                    <p className="pt-4"><span className="font-bold text-lg">Technologies:</span> Vite | NodeJS | ExpressJS | Tailwind | daisyUI | MongoDB | AOS | React Toastify | React Spinners | React Icons | Sweet Alert 2 </p>
                </div>
                <div className="mt-3 md:mt-4 flex justify-between ">
                    <a href="https://kiddoz-kuddoz-doll-shop.web.app" target="_black"
                        className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                    >Live Link</a>
                    <div className=" space-x-5 flex ">
                        <h4 className="font-bold">Github: </h4>
                        <a href="https://github.com/hasibulhasan372/kiddoz-kuddoz-doll-shop-client" target="_black"
                            className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                        >Client</a>
                        <a href="https://github.com/hasibulhasan372/kiddoz-kuddoz-doll-shop-server" target="_black"
                            className=" text-blue-400 font-semibold border-b-4 border-[#0ef] rounded-lg pb-1"
                        >Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kid;