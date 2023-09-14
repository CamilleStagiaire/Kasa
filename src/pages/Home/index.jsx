import { useContext } from 'react';
import { LogementContext } from '../../contexts/LogementContext';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import banner from '../../assets/banner.svg';

function Home() {
  const { data } = useContext(LogementContext);

  return (
    <main className="home">
      <div className="banner">
      <Banner src={banner} alt="bannière accueil" text="Chez vous, partout et ailleurs"/>
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
