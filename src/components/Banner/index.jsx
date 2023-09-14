function Banner({ src, alt, text}) {
  return (
    <div className={`banner_container`}>
      <img src={src} alt={alt} />
      {text && <h1 className="banner_text">{text}</h1>}
    </div>
  );
}

export default Banner;
