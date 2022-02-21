import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")
  const [currency, setCurrency] = useState('usd')
  const [perPage, setPerPage] = useState("10")

  let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [currency, perPage]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCurrency = e => {
    setCurrency(e.target.value)
  }

  const handlePerPage = e => {
    setPerPage(e.target.value)
  }

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
          <select name="currency" onChange={handleCurrency} className="coin-currency">
            <option value="usd">USD</option>
            <option value="ars">ARS</option>
          </select>
          <select name="per-page" onChange={handlePerPage} className="coin-per-page">
            <option value="null">Resultados</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </form>
      </div>
      <div className="coin-container">

      </div>
      {filteredCoin.map((coin) => <Coin key={coin.id} data={coin} />)}
      </div>
  );
}

export default App;
