import logo from '../../assets/logo_footer.svg';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
