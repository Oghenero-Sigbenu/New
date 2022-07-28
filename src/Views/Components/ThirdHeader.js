import "../../Assests/Stlyes/Header.css";

function ThirdHeader() {
    return (
        <div className="bg-white w-[100%]">
            <div className="flex w-[100%] justify-between">
                <h2 className="text-yellow text-center mx-auto font-semibold text-xl pt-3 ">Matches</h2>
                <div className="flex w-[60%] ">
                    <div className=" flex justify-between w-[25%] border-l-[1px] text-center match-score">
                        <p className="text-center  border-r-[1px] w-[33.3%]  py-3 border-[#0000003a]"><small className="text-yellow font-bold text-xl ">1</small></p>
                        <p className="text-center font-bold border-r-[1px] w-[33.3%] py-3 border-[#0000003a]"><small className="text-yellow font-bold  text-xl">x</small></p>
                        <p className="text-center  w-[33.3%] py-3 border-r-[1px]"><small className="text-yellow font-bold  text-xl">2</small></p>
                    </div>
                    <div className=" flex justify-between w-[25%] text-center match-score">
                        <p className="text-center  border-r-[1px] w-[33.3%]  py-3 border-[#0000003a]"><small className="text-yellow font-bold  text-xl">1</small></p>
                        <p className="text-center font-bold border-r-[1px] w-[33.3%] py-3 border-[#0000003a]"><small className="text-yellow font-bold  text-xl">x</small></p>
                        <p className="text-center  w-[33.3%] py-3 border-r-[1px]"><small className="text-yellow font-bold  text-xl">2</small></p>
                    </div>
                    <div className=" flex justify-between w-[25%] text-center match-score">
                        <p className="text-center  border-r-[1px] w-[33.3%]  py-3 border-[#0000003a]"><small className="text-yellow font-bold  text-xl">1</small></p>
                        <p className="text-center font-bold border-r-[1px] w-[33.3%] py-3 border-[#0000003a]"><small className="text-yellow font-bold text-xl ">x</small></p>
                        <p className="text-center  w-[33.3%] py-3 border-r-[1px]"><small className="text-yellow font-bold  text-xl">2</small></p>
                    </div>
                    <div className=" flex justify-between w-[25%] text-center match-score">
                        <p className="text-center  border-r-[1px] w-[33.3%]  py-3 border-[#0000003a]"><small className="text-yellow font-bold  text-xl">1</small></p>
                        <p className="text-center font-bold border-r-[1px] w-[33.3%] py-3 border-[#0000003a]"><small className="text-yellow font-bold  text-xl">x</small></p>
                        <p className="text-center  w-[33.3%] py-3 border-r-[1px]"><small className="text-yellow font-bold  text-xl">2</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdHeader;
