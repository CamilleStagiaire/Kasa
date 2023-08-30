function Tags({ tags }) {
    return (
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
  
  export default Tags;