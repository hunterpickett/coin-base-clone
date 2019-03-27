import * as React from 'react';
import MiniChart from './MiniChart';
import { coins } from './Coin';

const MiniCharts = () => {
  return (
    <div className="flex justify-center -mt-10">
      <div className="container flex justify-center">
        {coins.map(c => {
          return <MiniChart key={c.coinName} cost={c.cost} dailyChange={c.dailyChange} coinName={c.coinName} />;
        })}
      </div>
    </div>
  );
};

export default MiniCharts;
