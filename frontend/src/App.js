import './App.css';
import {useState} from "react";
import axios from "axios";

function App(){

  const [stock, setStock] = useState([])

  const getStockData = async () => {
    const res = await axios.get(`http://localhost:8080/api/stocks`)
    await console.log(res.data);
    await setStock(res.data);
  };

  return (
    <div className="App">
      {getStockData()}
      {stock}
    </div>
  );
}

export default App;
