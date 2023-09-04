function Host({ name, picture }) {
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="logement_presentation_host_profil">
      <p className="logement_presentation_host_profil_name">
        {firstName} <br /> {lastName}
      </p>
      <div className="logement_presentation_host_profil_img">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default Host;
