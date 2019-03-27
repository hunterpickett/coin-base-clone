interface Coin {
  cost: string;
  dailyChange: number;
  coinName: string;
}

export const coins: Coin[] = [
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
