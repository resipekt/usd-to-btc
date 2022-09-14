import { useState } from "react";

function Counter({ current_price }) {
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  let btcAmount = value / current_price;

  return (
    <div>
      <h3>To conver, <br/> Please enter amount of USD in a field below:</h3>
      <input
        type="text"
        id="value"
        name="value"
        onChange={handleChange}
        placeholder='enter here ...'
        value={value}
      />

      <h2>USD you will spend: ${value}</h2>
      <h2>BTC you will get: {btcAmount? btcAmount.toFixed(5):'Nothing, try enter an amount'}</h2>
    </div>
  );
}

export default Counter;
