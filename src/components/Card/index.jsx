function Card(props) {
  return (
    <article className="gallery_card">
      <img src={props.picture} alt={props.title} />
      <h3 className="gallery_title">{props.title}</h3>
    </article>
  );
};

export default Card;