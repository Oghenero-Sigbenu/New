import "../../Assests/Stlyes/Header.css";

function SecondHeader() {
  return (
    <div className="bg-black ">
    <div className="bg-black flex w-[100%] justify-end">
      <ul className="flex w-[60%] text-white justify-around ">
          <li className="mr-[1rem]  py-1 w-[25%] text-center text-sm font-bold">Odd/Even</li>
          <li className="mr-[1rem]  py-1 w-[25%] text-center text-sm font-bold">Total Goal</li>
          <li className="mr-[1rem]  py-1 w-[25%] text-center text-sm font-bold">Next Goal</li>
          <li className="mr-[1rem]  py-1 w-[25%] text-center text-sm font-bold">Half Time Total Goals</li>
      </ul>
    </div>
    </div>
  );
}

export default SecondHeader;
