import about from '../../datas/about.json';
import BannerAbout from '../../components/BannerAbout';
import Collapse from '../../components/Collapse';

function About() {
  return (
    <main className="about">
      <div className="banner">
        <BannerAbout />
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
