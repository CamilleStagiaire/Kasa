//import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LogementContext } from '../../contexts/LogementContext';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

function Home() {
  const { data } = useContext(LogementContext);

  return (
    <main className="home">
      <div className="banner">
        <Banner />
      </div>
      <div className="gallery">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            picture={logement.cover}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
