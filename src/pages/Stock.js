import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
//the stock symbol for Intel was changed to INTC so that show page wasn't working, I changed it in Dashboard so it works now, but always good to testing everything! 
function Stock() {
  const apiKey = '2154bbfe12a779aed8620932f48c9208'
  const params = useParams()
  const symbol = params.symbol
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
  
  const [stocks, setStock] = useState('null')

  const getStock = async () => {
    const response = await fetch (url)
    const data = await response.json()
    setStock(data)
  };

  useEffect(() => {
    getStock()
  }, [])
//added font-awesome spinner if 'null'
  return (
    <div className="Stock">
      {!stocks === 'null' ? (
      <i class="fa fa-spinner fa-spin" style={{ fontSize:"24px", textAlign: "center", display: 'block'}}></i>
      ) : (
      <div>
          <h2>{stocks[0].symbol}</h2>
          <h3>{stocks[0].price}</h3>
          <h4>{stocks[0].ceo}</h4>
        </div>
        )}
    </div>
  );
}
export default Stock;