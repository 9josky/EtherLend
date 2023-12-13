import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

const CoinPrice = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <div className="coinTableWrapper">
      <div className="coinTable">
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (INR)</th>
              <th>Market Cap Rank</th>
              <th>Price Change Percentage</th>
              <th>Market Cap (INR)</th>
              <th>Volume (INR)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
                marketCapRank={coin.market_cap_rank}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinPrice;
