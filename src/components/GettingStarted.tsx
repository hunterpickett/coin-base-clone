import * as React from 'react';

const GettingStarted = () => {
  return (
    <div className="flex justify-center pb-32">
      <div className="container text-white flex flex-col items-center py-8">
        <h1 className="text-5xl mb-8">Buy and sell digital currency</h1>
        <h2 className="text-sm text-grey-light mb-8">
          Coinbase is the easiest and most trusted place to buy, sell, and manage your digital currency.
        </h2>
        <form className="flex">
          <input type="text" className="rounded mr-2 w-72 px-5" placeholder="Email Address" />
          <button className="appearance-none bg-green-light text-white p-5 rounded ">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default GettingStarted;
