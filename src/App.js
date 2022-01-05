import axios from 'axios';
import React from 'react';
import './App.css';
import CoinRow from './components/CoinRow';

function App() {

  let [allCoins, setAllCoins] = React.useState([]);

  React.useEffect(()=> {
    axios
    .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
    .then(({ data }) => {
      const coins = data.Data.map((coin) => {
        const obj = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(3),
          volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
        };
        return obj;
      })
      setAllCoins(coins)
    })
  }, [])

  return (
    <div>
      <table width="100%">
      <tbody>
        {allCoins.map(coin =>
          <CoinRow items={coin}/>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
