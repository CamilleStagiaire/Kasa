import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LogementContext } from '../../contexts/LogementContext';
import Slideshow from '../../components/Slideshow';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';
import Collapse from '../../components/Collapse';

function Logement() {
  let { id } = useParams();
  const { data } = useContext(LogementContext);

  const logement = data.find((item) => item.id === id);

  return (
    <div className="logement">
    {logement ? (
      <>
        <Slideshow pictures={logement.pictures} />
        <div className="logement_presentation">
          <div className="logement_presentation_text">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <Tags tags={logement.tags} />
          </div>
          <div className="logement_presentation_host">
            <Host name={logement.host.name} picture={logement.host.picture} />
            <Rating value={logement.rating} />
          </div>
          <div className="logement_presentation_collapse">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Équipements" content={logement.equipments.join(' ')} />

          </div>
        </div>
      </>
    ) : (
      <p>Logement introuvable</p>
    )}
  </div>
  );
}

export default Logement;
