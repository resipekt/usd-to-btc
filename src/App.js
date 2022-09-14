import "./App.css";
import Coin from "./components/Coin";
import axios from "axios";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [data, setData] = useState([{
    'image':'',
    'name':'',
    'symbol':'',
    'current_price':0
}]);
  console.log('data at start: ', data)


  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log('axios then data: ', res.data)
      })
      .catch((error) => console.log(error));
  }, []);

  
  const {image, name, symbol, current_price, last_updated} = data[0];
    
  return (
    <div className="container">
      
      <Coin image={image} name={name} symbol={symbol} price={current_price} last_updated={last_updated}/>

      <Counter current_price={current_price}/>
      
    </div>
  );
}

export default App;
