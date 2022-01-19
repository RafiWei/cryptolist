import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  price_change,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {price_change < 0 ? (
            <p className="coin-percent red">{price_change.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{price_change.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
