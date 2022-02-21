import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")
  let currency = "usd";

  let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [currency]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoin = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">CRYPTO API</h1>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="coin-container">

      </div>
      {filteredCoin.map((coin) => <Coin key={coin.id} data={coin} />)}
      </div>
  );
}

export default App;
