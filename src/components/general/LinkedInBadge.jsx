function LinkedInBadge() {
  const socialMedia = {
    linkedin: "https://linkedin.com/in/liamoneillza/",
    github: "https://github.com/liamzone",
    website: "https://liamzone.co.za",
  };

  return (
    <div className="card mx-auto bg-dark text-white text-center linkedin-badge">
      <div className="card-title d-flex justify-content-between pin-bar">
        <i class="fa-solid fa-thumbtack pin-l"></i>
        <i class="fa-solid fa-thumbtack pin-r"></i>
      </div>
      <img
        src="./images/liam-oneill.jpg"
        alt="..."
        className="card-img-top rounded-circle linkedin-profile-img mx-auto"
      />
      <div className="card-body">
        <h5 className="card-title">Liam O'Neill</h5>
        <h6 className="card-subtitle">BSc Information Technology</h6>
        <a href={socialMedia.linkedin} className="btn  btn-outline-light mt-4">
          View Profile
        </a>
      </div>
      <hr />
      <img
        src="./images/brands/linkedin-logo.png"
        alt="LinkedIn Brand Official Logo"
        className="linkedin-brand-logo"
      />
    </div>
  );
}

export default LinkedInBadge;
