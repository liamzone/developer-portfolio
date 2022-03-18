function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightHolder = "LIAMZONE";

  const socialMedia = {
    linkedin: "https://linkedin.com/in/liamoneillza/",
    github: "https://github.com/liamzone",
    website: "https://liamzone.co.za",
  };

  return (
    <footer className="bg-dark text-center text-white">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href={socialMedia.linkedin}
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* <!-- Github --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href={socialMedia.github}
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* <!-- Website --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href={socialMedia.website}
            role="button"
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
      >
        © {currentYear} Copyright:&nbsp;
        <a
          className="text-white text-decoration-none"
          href={socialMedia.website}
        >
          {copyrightHolder}
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
