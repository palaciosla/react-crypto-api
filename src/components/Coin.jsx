import React from "react";

const Coin = ({ data }) => {
  if (data.length === 0) return <h2>Cargando...</h2>;

  let { image, name, symbol, current_price, total_volume, price_change_percentage_24h, market_cap } = data;
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">$ {current_price.toLocaleString()}</p>
          <p className="coin-volume">$ {total_volume.toLocaleString()}</p>
          {price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">{price_change_percentage_24h.toFixed(2)} %</p>
          ) : (
            <p className="coin-percent green">{price_change_percentage_24h.toFixed(2)} %</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
