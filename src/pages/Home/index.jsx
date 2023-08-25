import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Banner from '../../components/Banner';

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
      <main className="home">
        <div className="banner">
          <Banner />
        </div>
        <div className="gallery">
          {data.map((logement) => (
            <Card
              key={logement.id}
              title={logement.title}
              picture={logement.cover}
            />
          ))}
        </div>
      </main>
  );
}

export default Home;
