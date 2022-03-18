function Contact() {
  return (
    <div className="card text-light bg-dark h-100 project-card w-auto">
      <div className="card-body d-flex justify-content-evenly">
        {/*"Email"*/}
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-at contact-icon"></i>
          <p className="card-text text-muted block">
            contact.liamzone@gmail.com
          </p>
        </div>

        {/* "LinkedIn" */}
        <div className="d-flex align-items-center">
          <i className="fab fa-linkedin-in contact-icon"></i>
          <p className="card-text text-muted block">liamoneillza</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
