import banner from '../../assets/banner.svg';

function Banner() {
  return (
    <div className="banner_container">
      <img src={banner} alt="banner_home" />
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
