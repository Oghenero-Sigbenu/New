import * as _ from 'lodash';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

const ScoreCard = ({data, matchMarkets}) => {
  const [markets, setMarkets] = useState([]);

  const getLiveOdds = (market, selection) => {
    let odd = <FontAwesomeIcon icon={faLock}  className="text-[#cecaca] mt-2 text-sm"/>;
    if (markets && markets.length) {
      _.each(markets, (value, key) => {
        if (value.active === '1' && value.type_id === market.type_id) {
          _.each(value.odds, function (item, index) {
            if (item.active === '1' && item.type === selection.type) {
              // item.MarketId = value.type_id;
              odd = item.odds;
            }
          });
        }
      });
    }    
    return odd;
  }

  useEffect(() => {
    setMarkets(matchMarkets)
  }, [matchMarkets]);

  return(
    <div className=" w-[25%] mt-[.8px] match-card  border-r-[.1rem] border-b-[.1rem] border-black text-center">
        <div className="text-center flex justify-around w-full text-white  border-[#0000003a]">
          {data.outcomes.map(outcome => <small className="font-bold">{outcome.name}</small>)}
        </div>
        {data.markets.map(market => 
          <>
            <small className="text-[#7fc582] font-bold text-center text-xs">{market.name}</small>
            <div className="text-center flex justify-around  w-full -m text-white  border-[#0000003a]">
              {data.outcomes.map(outcome => <p className="font-bold text-3xl">
                {getLiveOdds(market, outcome)} 
              </p> )}
            </div>
          </>
        )}
    </div>
  )
}

export default ScoreCard;