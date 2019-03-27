import * as React from 'react';
import HelpChat from './HelpChat';
import GettingStarted from './GettingStarted';
import MiniCharts from './MiniCharts';
import Video from './Video';
import Information from './Information';

const Header = () => {
  return (
    <div>
      <HelpChat />
      <div
        style={{
          backgroundImage: 'url(https://www2.coinbase.com/assets/topBackground.png)',
          backgroundSize: 740,
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-blue-coinbase"
      >
        <div className="flex justify-center">
          <div className="container">
            <div className="p-8 flex justify-between items-center">
              <div>
                <a href="#" className="no-underline text-white">
                  <h1 className="text-2xl">Reactbase</h1>
                </a>
              </div>
              <div className="flex text-sm font-semibold">
                <div>
                  <a href="#" className="mr-6 no-underline text-white hover:text-blue-lighter">
                    Products
                  </a>
                </div>
                <div>
                  <a href="#" className="mr-6 no-underline text-white hover:text-blue-lighter">
                    Prices
                  </a>
                </div>
                <div>
                  <a href="#" className="no-underline text-white hover:text-blue-lighter">
                    Company
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a href="#" className="mr-6 no-underline text-white hover:text-blue-lighter">
                  Sign in
                </a>
                <button className="ease-in appearance-none border-2 border-white rounded px-6 py-4 text-white text-sm text-semibold hover:bg-white hover:text-blue-coinbase">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <GettingStarted />
      </div>
      <MiniCharts />
      <Video />
      <Information />
    </div>
  );
};

export default Header;
