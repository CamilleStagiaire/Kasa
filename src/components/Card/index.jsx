const Card = (props) => {
  return (
    <article className="card">
      <img src={props.picture} alt={props.title} />
      <h3>{props.title}</h3>
    </article>
  );
};

export default Card;