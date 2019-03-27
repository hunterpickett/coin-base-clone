import * as React from 'react';
import PhoneSVG from './PhoneSVG';
const everythingImg = require('../img/everythingyouneed.png');

const Information = () => {
  return (
    <div className="flex justify-center border-b py-24">
      <div className="container flex">
        <div className="pt-24 w-2/3">
          <img src={everythingImg} />
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl leading-normal px-6">
            Everything you need to buy and <br />
            sell bitoin today
          </h1>
          <div className="flex p-6 items-center">
            <div className="rounded-full flex items-center justify-center h-16 w-16 info-badge-shadow mr-6">
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="a" d="M0 32h32V0H0z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path d="M27 11a11 11 0 1 1-22 0 11 11 0 0 1 22 0" fill="#D4EEFF" />
                  <path fill="#55B4FC" d="M0 32h32V11H0z" />
                  <path d="M16 22a11 11 0 0 0 11-11H5a11 11 0 0 0 11 11" fill="#1752F0" />
                  <path d="M30 22a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" fill="#FFF" />
                </g>
              </svg>
            </div>
            <div className="w-5/6">
              <h3 className="text-xl font-semibold mb-2">Buy and sell major cryptocurrencies</h3>
              <p className="text-grey-darker leading-normal">
                You can buy bitcoin, ethereum, and more instantly with a bank
                <br />
                account or debit card.
              </p>
            </div>
          </div>
          <div className="flex p-6 items-center">
            <div className="rounded-full flex items-center justify-center h-16 w-16 info-badge-shadow mr-6">
              <svg width="30" height="32" viewBox="0 0 30 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#D4EEFF" d="M10 32h10V10H10z" />
                  <path fill="#1752F0" d="M20 32h10V0H20z" />
                  <path fill="#55B4FC" d="M0 32h10V19H0z" />
                </g>
              </svg>
            </div>
            <div className="w-5/6">
              <h3 className="text-xl font-semibold mb-2">Access prices and price charts</h3>
              <p className="text-grey-darker leading-normal">
                Wondering how your crypto is doing? Check prices on the
                <br />
                web or with our Android or iOS app.
              </p>
            </div>
          </div>
          <div className="flex p-6 items-center">
            <div className="rounded-full flex items-center justify-center h-16 w-16 info-badge-shadow mr-6">
              <svg width="30" height="32" viewBox="0 0 30 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M14.86 0A9.14 9.14 0 0 0 5.7 9.14v14.63H24V9.14C24 4.1 19.9 0 14.86 0" fill="#D4EEFF" />
                  <path fill="#55B4FC" d="M0 32h29.71V9.14H0z" />
                  <path fill="#1752F0" d="M5.71 27.43H24V9.14H5.71z" />
                </g>
              </svg>
            </div>
            <div className="w-5/6">
              <h3 className="text-xl font-semibold mb-2">Store your crypto safely</h3>
              <p className="text-grey-darker leading-normal">
                Over 98% of cryptocurrency is stored offline and the rest is
                <br />
                protected by industry-leading online security.
              </p>
            </div>
          </div>
          <div className="flex p-6 items-center">
            <div className="rounded-full flex items-center justify-center h-16 w-16 info-badge-shadow mr-6">
              <PhoneSVG />
            </div>
            <div className="w-5/6">
              <h3 className="text-xl font-semibold mb-2">Set automatic buys</h3>
              <p className="text-grey-darker leading-normal">
                If you'd like to buy a little cyrpto every week or every month,
                <br />
                we make it simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
