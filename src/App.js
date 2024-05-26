import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  console.log(data);

  async function getData() {
    try {
      const response = await fetch('https://realty-ggcv.onrender.com/main/flats');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const facts = await response.json();
      setData(facts);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
      <div className="container">
        {error && <p className="error">{error}</p>}
        <div className="card-grid">
          {data?.results?.map((item, idx) => {
            return (
                <div key={idx} className="card">
                  <div className="card-image">
                    <img className="img" src={item.flat_images[0]?.image} alt="img" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>Кол-во комнат: {item.rooms}</p>
                  <h2>Цена: {item.price}$</h2>
                </div>
            );
          })}
        </div>
      </div>
  );
};

export default App;
