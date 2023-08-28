import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <article className="gallery_card">
        <Link to={`/logement/${props.id}`}>
          <img src={props.picture} alt={props.title} />
          <h3 className="gallery_title">{props.title}</h3>
        </Link>
        <div className="gallery_gradient"></div>
    </article>
  );
};

export default Card;