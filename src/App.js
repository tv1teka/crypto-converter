import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import CryptoTable from './components/CryptoTable';

function App() {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(()=> {
    axios
    .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins = data.Data.map((coin) => {
          const obj = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW?.USD?.PRICE.toFixed(3),
            volume24Hour: parseInt(coin?.RAW?.USD?.VOLUME24HOUR),
          };
          return obj;
        })
        setAllCoins(coins)
      })
  }, [])

  return <CryptoTable crypto = {allCoins}/>;
  
}

export default App;
