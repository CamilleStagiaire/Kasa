import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LogementContext } from '../../contexts/LogementContext';

function Logement() {
  let { id } = useParams();
  const { data } = useContext(LogementContext);
  
  const logement = data.find((item) => item.id === id);

  return (
    <div>
      {logement ? <h1>{logement.title}</h1> : <p>Logement introuvable</p>}
    </div>
  );
}

export default Logement;