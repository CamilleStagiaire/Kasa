import about from '../../datas/about.json';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import banner_about from '../../assets/banner_about.svg';

function About() {
  return (
    <main className="about">
      <div className="banner">
      <Banner src={banner_about} alt="bannière à propos"/>
      </div>
      <div className="collapse">
        <ul>
          {about.map((item, index) => (
            <li key={index}>
              <Collapse title={item.aboutTitle} content={item.aboutText} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default About;
