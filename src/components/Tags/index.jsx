function Tags({ tags }) {
    return (
      <ul className="logement_presentation_text_tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
  
  export default Tags;