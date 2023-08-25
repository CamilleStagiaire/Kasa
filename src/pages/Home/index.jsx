import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Bonjour</h1>
        <div className="card-container">
          {data.map((logement) => (
            <Card
              key={logement.id}
              title={logement.title}
              picture={logement.cover}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
