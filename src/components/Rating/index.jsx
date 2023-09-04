import StarIcon from '../../components/StarIcon';

function Rating({ value }) {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      let className = 'star';
  
      if (i <= value) {
        className += '_value';
      } else {
        className += '_rest';
      }
  
      stars.push(
        <span key={i} className={className}>
           <StarIcon />
        </span>
      );
    }
  
    return <div className="logement_presentation_rating">{stars}</div>;
  }
  
  export default Rating;