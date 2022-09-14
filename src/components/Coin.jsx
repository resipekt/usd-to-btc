import moment from "moment/moment";
const Coin = ({image, name, symbol, price, last_updated}) => {
  return (
    <div className="coin-container">
      <h1>React {name} live converter</h1>
      <img src={image} alt="btc" />
      
      <div className="date">{symbol.toUpperCase()} price data updated: {moment().startOf(last_updated).fromNow()} at {last_updated}</div>
      <div >Current price according to Coingecko.com in USD is <span className="bold">$ {price}</span></div>
    </div>
  );
};

export default Coin;
