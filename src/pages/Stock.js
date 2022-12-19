import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Stocks() {
  
  const [stocks, setStock] = useState('null')

  const stocksData = [
    {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
    {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
    {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
    {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
    {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
    {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
  ]

  // const getStock = async () => {
  //   const response = await fetch (url)
  //   const data = await response.json()
  //   setStock(data)
  // };

  // useEffect(() => {
  //   getStock()
  // }, [])
  //   console.log(stocks)

  return (
    <div className="Stock">
      {/* {stocks === 'null' ? <h2>Loading...</h2> : <div>
          <h2>{name}({symbol})</h2>
          <h2>{price}</h2>
          <h2>{change}</h2>
        </div>
        } */}
    </div>
  );
}
export default Stocks;