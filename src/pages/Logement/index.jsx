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
              <h2 className="logement_presentation_text_name">
                {logement.title}
              </h2>
              <p className="logement_presentation_text_location">
                {logement.location}
              </p>
              <Tags tags={logement.tags} />
            </div>
            <div className="logement_presentation_host">
              <Rating value={logement.rating} />
              <Host name={logement.host.name} picture={logement.host.picture} />
            </div>
          </div>
          <div className="logement_collapse">
            <Collapse title="Description" content={logement.description} />
            <Collapse
              title="Équipements"
              content={
                <div>
                  {logement.equipments.map((equip, index) => (
                    <div key={index}>{equip}</div>
                  ))}
                </div>
              }
            />
          </div>
        </>
      ) : (
        <p>Logement introuvable</p>
      )}
    </div>
  );
}

export default Logement;
