import "../../Assests/Stlyes/Header.css";
import Logo from "../../Assests/images/logo.jpeg";

function Header() {
  return (
    <div className="header-banner p-[1.5rem] ">
      <div className="w-[100%] flex justify-around">
      <div className=" justify-around w-[100px] mt-1">
        {/* <img src={Logo} alt="Logo" className="w-full"/> */}
      </div>
        <div className="w-[60%] mx-auto flex justify-end ">
        <div className="text-white bg-[#e57326] mr-4 flex p-1 rounded-[5px] pl-[.8rem]">
            <div className="w-20% mr-[1rem] mt-[.2rem]">
              <h5 className="w-full text-sm">GOLD</h5>
              <h6 className="-mt-1 text-[9px] w-full">JACKPOT</h6>
            </div>
            <div className="bg-yellow px-[3rem] py-[.4rem] rounded-[5px]">
            <h2 className="text-black font-black">N8,000</h2>
            </div>
          </div>
          <div className="text-black bg-[#e0dfdf] mr-4 flex p-1 rounded-[5px] pl-[.8rem]">
            <div className="w-20% mr-[1rem] mt-[.2rem]">
              <h5 className="w-full text-sm">GOLD</h5>
              <h6 className="-mt-1 text-[9px] w-full">JACKPOT</h6>
            </div>
            <div className="bg-[#c2c0c0] px-[3rem] py-[.4rem] rounded-[5px]">
            <h2 className="text-black font-black">N7,000</h2>
            </div>
          </div>
          <div className="text-white bg-[#5d3702] mr-4 flex p-1 rounded-[5px] pl-[.8rem]">
            <div className="w-20% mr-[1rem] mt-[.2rem]">
              <h5 className="w-full text-sm">GOLD</h5>
              <h6 className="-mt-1 text-[9px] w-full">JACKPOT</h6>
            </div>
            <div className="bg-[#f08623df] px-[3rem] py-[.4rem] rounded-[5px]">
            <p className="text-white font-bold">N7,000</p>
            </div>
          </div>
        </div>
      <div  className=" flex justify-end mr-[2rem] float-right mt-2">
        <div className="">
          <button className=" text-sm font-bold text-white header-red-bg py-[.2rem] px-[2rem] rounded-[2px]">LIVE</button>
        </div>
        <div className="ml-1">
          <button className=" text-sm font-bold text-white bg-green px-[2rem] py-[.2rem] rounded-[2px]">SOCCER</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
