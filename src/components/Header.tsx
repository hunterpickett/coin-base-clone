import * as React from 'react';
const everythingImg = require('../img/everythingyouneed.png');
const ownAPieceImg = require('../img/ownapiece.jpg');

export interface IHeaderProps {}
export interface IGetStartedProps {}

const GetStarted: React.SFC<IGetStartedProps> = props => {
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

const pickSvg = (coinName: string) => {
  switch (coinName) {
    case 'Bitcoin':
      return (
        <svg className="text-orange-bitcoin h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
          />
        </svg>
      );
    case 'Bitcoin Cash':
      return (
        <svg className="text-green h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
          />
        </svg>
      );
    case 'Ethereum':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="text-indigo h-6 w-6 mr-2">
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          />
        </svg>
      );
    case 'Litecoin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="text-grey h-6 w-6 mr-2">
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          />
        </svg>
      );
    case 'Ethereum Classic':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="text-teal h-6 w-6 mr-2">
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          />
        </svg>
      );
    default:
      return (
        <svg className="text-orange-bitcoin h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
          />
        </svg>
      );
  }
};

const pickColor = (dailyChange: number) => {
  if (dailyChange >= 0) return 'text-green';
  return 'text-grey-darker';
};

const renderDailyChange = (dailyChange: number) => {
  const change = dailyChange >= 0 ? `+${dailyChange}%` : `${dailyChange}%`;
  return <p className={`text-sm ml-2 font-semibold ${pickColor(dailyChange)}`}>{change}</p>;
};

interface IMiniChartProps {
  cost: string;
  dailyChange: number;
  coinName: string;
}

interface IMiniChartState {
  isHidden: boolean;
}

class MiniChart extends React.Component<IMiniChartProps, IMiniChartState> {
  constructor(props: IMiniChartProps) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  componentDidMount() {}

  mouseEnter = () => {
    this.setState({ isHidden: false });
  };
  mouseLeave = () => {
    this.setState({ isHidden: true });
  };

  renderButton = (coinName: string) => {
    if (this.state.isHidden) return null;
    return (
      <>
        <div className="opacity-75 absolute rounded h-full w-full pin bg-white" />
        <div className="flex justify-center relative">
          <button
            style={{ bottom: 60 }}
            className="z-25 absolute appearance-none text-white bg-green hover:bg-green-dark rounded py-3 px-6 opacity-100 text-sm"
          >
            Buy {coinName}
          </button>
        </div>
      </>
    );
  };

  render() {
    return (
      <div
        className="relative p-4 border rounded mr-8 bg-white w-64"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className="flex items-center mb-2">
          {pickSvg(this.props.coinName)}
          <p className="font-semibold text-grey-darkest">{this.props.coinName}</p>
        </div>
        <div className="flex items-center mr-2">
          <h3 className="mr-2 text-2xl font-normal">{this.props.cost}</h3>
          {renderDailyChange(this.props.dailyChange)}
        </div>
        <div className="h-24 w-24 flex items-center">Place Pretty Graph Here</div>
        <div className=" flex justify-end">
          <p className="text-xs text-white p-1 bg-grey-dark rounded w-1/5 text-center">24h</p>
        </div>
        {this.renderButton(this.props.coinName)}
      </div>
    );
  }
}

interface IMiniChartsProps {}

interface Coin {
  cost: string;
  dailyChange: number;
  coinName: string;
}

const coins: Coin[] = [
  {
    cost: '$6546.80',
    dailyChange: 1.19,
    coinName: 'Bitcoin'
  },
  {
    cost: '$511.26',
    dailyChange: -1.02,
    coinName: 'Bitcoin Cash'
  },
  {
    cost: '$222.79',
    dailyChange: 0,
    coinName: 'Ethereum'
  },
  {
    cost: '$57.49',
    dailyChange: -1.38,
    coinName: 'Litecoin'
  },
  {
    cost: '$10.96',
    dailyChange: -1.17,
    coinName: 'Ethereum Classic'
  }
];

const MiniCharts: React.SFC<IMiniChartsProps> = props => {
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

const Video = () => {
  return (
    <div className="flex justify-center border-b py-24">
      <div className="container flex items-center">
        <div className="w-1/3 flex justify-center">
          <img className="rounded h-40" src={ownAPieceImg} />
        </div>
        <div className="w-2/3">
          <h1 className="mb-6 text-3xl">Own a piece of the future</h1>
          <p className="text-grey-darker">
            We’re on a mission to build an open financial system for the world.
            <span className="text-blue-dark font-bold"> Watch the video</span>
          </p>
        </div>
      </div>
    </div>
  );
};

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

const HelpChat = () => {
  return (
    <button
      style={{
        backgroundImage: 'url(https://d124s1zbdqkqqe.cloudfront.net/Dialogue.svg)',
        backgroundSize: 28,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        bottom: 20,
        right: 20
      }}
      className="fixed bg-blue-coinbase rounded-full h-12 w-12"
    />
  );
};

const PhoneSVG = () => {
  return (
    <svg width="36" height="38" viewBox="0 0 36 38" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M17.81 9.5a2.38 2.38 0 0 0 2.38-2.38V2.38a2.38 2.38 0 0 0-4.75 0v4.75A2.38 2.38 0 0 0 17.8 9.5M29.69 9.5a2.38 2.38 0 0 0 2.37-2.38V2.38a2.38 2.38 0 0 0-4.75 0v4.75A2.38 2.38 0 0 0 29.7 9.5"
          fill="#D4EEFF"
        />
        <path fill="#D4EEFF" d="M0 38h35.63V4.75H0z" />
        <path fill="#55B4FC" d="M0 11.88h35.63V4.75H0z" />
        <path
          d="M5.94 9.5A2.38 2.38 0 0 0 8.3 7.12V2.38a2.38 2.38 0 0 0-4.75 0v4.75A2.38 2.38 0 0 0 5.94 9.5"
          fill="#D4EEFF"
        />
        <path
          d="M27.31 4.75v2.38a2.38 2.38 0 0 0 4.75 0V4.75h-4.75zM5.94 9.5A2.38 2.38 0 0 0 8.3 7.12V4.75H3.56v2.38A2.38 2.38 0 0 0 5.94 9.5"
          fill="#1752F0"
        />
        <path
          d="M17.81 9.5a2.38 2.38 0 0 0 2.38-2.38V2.38a2.38 2.38 0 0 0-4.75 0v4.75A2.38 2.38 0 0 0 17.8 9.5"
          fill="#D4EEFF"
        />
        <path d="M17.81 9.5a2.38 2.38 0 0 0 2.38-2.38V4.75h-4.75v2.38A2.38 2.38 0 0 0 17.8 9.5" fill="#1752F0" />
        <path fill="#FFF" d="M4.75 34.44h26.13V11.88H4.75z" />
        <path fill="#1752F0" d="M12.69 26.33l3.36 3.36L26.12 19.6l-3.35-3.36z" />
        <path fill="#1752F0" d="M16.05 29.69l3.36-3.36-6.25-6.24-3.35 3.35z" />
      </g>
    </svg>
  );
};

class Header extends React.Component<IHeaderProps, any> {
  public render() {
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
          <GetStarted />
        </div>
        <MiniCharts />
        <Video />
        <Information />
      </div>
    );
  }
}

export default Header;
