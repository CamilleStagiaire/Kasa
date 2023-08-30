import StarIcon from '../../components/StarIcon';

function Rating({ value }) {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      let className = 'star';
  
      if (i <= value) {
        className += ' primary';
      } else {
        className += ' secondary';
      }
  
      stars.push(
        <span key={i} className={className}>
           <StarIcon />
        </span>
      );
    }
  
    return <div className="rating">{stars}</div>;
  }
  
  export default Rating;