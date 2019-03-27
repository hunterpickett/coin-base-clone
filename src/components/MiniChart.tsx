import * as React from 'react';
import CryptoSVG from './CryptoSvg';

const pickColor = (dailyChange: number) => {
  if (dailyChange >= 0) return 'text-green';
  return 'text-grey-darker';
};

const renderDailyChange = (dailyChange: number) => {
  const change = dailyChange >= 0 ? `+${dailyChange}%` : `${dailyChange}%`;
  return <p className={`text-sm ml-2 font-semibold ${pickColor(dailyChange)}`}>{change}</p>;
};

interface IProps {
  cost: string;
  dailyChange: number;
  coinName: string;
}

interface IState {
  isHidden: boolean;
}

class MiniChart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
          <CryptoSVG coinName={this.props.coinName} />
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

export default MiniChart;
