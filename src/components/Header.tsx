import * as React from 'react';

export interface IHeaderProps {}
export interface IGetStartedProps {}

const GetStarted: React.SFC<IGetStartedProps> = props => {
  return (
    <div className="flex justify-center pb-32">
      <div className="container text-white flex flex-col items-center py-8">
        <h1 className="text-5xl mb-8">Buy and sell digital currency</h1>
        <h2 className="text-sm text-grey-light mb-8">
          Coinbase is the easiest and most trusted place to buy, sell, and
          manage your digital currency.
        </h2>
        <form className="flex">
          <input
            type="text"
            className="rounded mr-2 w-72 px-5"
            placeholder="Email Address"
          />
          <button className="appearance-none bg-green-light text-white p-5 rounded ">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

const pickSvg = (coinName: string) => {
  switch (coinName) {
    case 'Bitcoin':
      return (
        <svg
          className="text-orange-bitcoin h-6 w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
          />
        </svg>
      );
    case 'Bitcoin Cash':
      return (
        <svg
          className="text-green h-6 w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
          />
        </svg>
      );
    case 'Ethereum':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="text-indigo h-6 w-6 mr-2"
        >
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          />
        </svg>
      );
    case 'Litecoin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="text-grey h-6 w-6 mr-2"
        >
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          />
        </svg>
      );
    case 'Ethereum Classic':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="text-teal h-6 w-6 mr-2"
        >
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="text-orange-bitcoin h-6 w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
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
  return (
    <p className={`text-sm ml-2 font-semibold ${pickColor(dailyChange)}`}>
      {change}
    </p>
  );
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
          <p className="font-semibold text-grey-darkest">
            {this.props.coinName}
          </p>
        </div>
        <div className="flex items-center mr-2">
          <h3 className="mr-2 text-2xl font-normal">{this.props.cost}</h3>
          {renderDailyChange(this.props.dailyChange)}
        </div>
        <div className="h-24 w-24 flex items-center">Some Graph</div>
        <div className=" flex justify-end">
          <p className="text-xs text-white p-1 bg-grey-dark rounded w-1/5 text-center">
            24h
          </p>
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
          return (
            <MiniChart
              key={c.coinName}
              cost={c.cost}
              dailyChange={c.dailyChange}
              coinName={c.coinName}
            />
          );
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
          <img
            className="rounded h-40"
            src="https://www2.coinbase.com/assets/thumbnail.png"
          />
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

class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <div>
        <div className="bg-blue-coinbase">
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
                    <a
                      href="#"
                      className="mr-6 no-underline text-white hover:text-blue-lighter"
                    >
                      Products
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="mr-6 no-underline text-white hover:text-blue-lighter"
                    >
                      Prices
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="no-underline text-white hover:text-blue-lighter"
                    >
                      Company
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-6 no-underline text-white hover:text-blue-lighter"
                  >
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
      </div>
    );
  }
}

export default Header;
