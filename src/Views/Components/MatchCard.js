import Flag from "../../Assests/images/flag.png";
import ScoreCard from "./ScoreCard";
import "../../Assests/Stlyes/match.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { MarketsPage1 } from "../../Utils/constants";
import GoalCard from "./Goal";

function MatchCard({details}) {
  const [fixtures, setFixtures] = useState([]);
  const [goal, setGoal] = useState(true);
  const [started, setStarted] = useState(false);
  const [updatedData, setData] = useState(MarketsPage1);
  const [, setTotalCount] = useState();
  const [, setAnimate] = useState(false);
  const [animateScore] = useState(false);

  const getData = () => {
    return axios
      .get("https://sports-api.sportsbookengine.com/api/sports/live/viewer")
      .then((response) => {
        setFixtures(response.data.data);
        setTotalCount(response?.data?.data?.length);
      });
  };

  useEffect(() => {
    async function fetchData() {
      await getData()
      .then(() => setStarted(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    let interval;
    if (started) {
      interval = setInterval(() => {
        getData();
      }, 15000);
    }
    return () => clearInterval(interval);
  }, [started]);


  useEffect(() => {
    const items = [MarketsPage1];
    items.forEach((item, i) => {
      setData(item);
    });
  }, [updatedData]);

  useEffect(() => {
    setTimeout( () => {
        // change();
      },
      15000 // 5000, 10000, 15000
    );
    setAnimate(false);
  }, [updatedData]);

  const displayScore = (score, team) => {
    if (score) {
      const scoreArray = score.split(":");
      if (team === "home") {
        return scoreArray[0];
      } else {
        return scoreArray[1];
      }
    }
  };
  return (
    <div className="w-[100%] ">
      {fixtures && fixtures.map((item, i) => (
    <div className="flex w-[100%] match-card even:bg-white" key={i}>
        <>
      <div className="flex pt-3 w-[40%] pl-2 pr-1 border-r-[.1rem]">
        <div className="green-bg w-[130px] h-[90px] text-center py-[1.5rem] mt-2">
          <h2 className="text-white font-extrabold text-xl">2107</h2>
          <p className="text-white font-bold -mt-2">{item.live_data?.match_time}'</p>
        </div>
        <div className="w-[95%] mx-auto">
          <div className="w-[100%]  mt-2 px-3 flex">
            <div className="bg-[#000000] w-[60%] flex pl-3">
              <img
                src={Flag}
                className="w-[15%] border-2 divide-[#4C4C4C]"
                alt
              />
              <h2 className=" text-white pl-3 text-xs  ">FRANCE</h2>
            </div>
            <h2 className="bg-[#4C4C4C] w-[40%] text-right pr-5 text-xs text-white">
              League 1{" "}
            </h2>
          </div>
          <div className="flex justify-between">
            <div className=" ">
              <p className="ml-4 font-medium text-3xl text-white">
                {item.team_a}
              </p>
              <p className="ml-4 font-medium text-3xl text-white">
              {item.team_b}
              </p>
            </div>
            <div className=" ">
              <p className="mr-4 font-bold text-3xl text-white">{displayScore(item.score, 'home')}</p>
              <p className="mr-4 font-bold text-3xl text-white">{displayScore(item.score, 'away')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[60%] ">
        {item.goal === true ? (
          <GoalCard />
        ) : (
          MarketsPage1.map(data => <ScoreCard data={data} matchMarkets={item.live_data?.markets} /> )
        )}
      </div>
      </> 
    </div>
      ))}
      </div>
  );
}

export default MatchCard;
