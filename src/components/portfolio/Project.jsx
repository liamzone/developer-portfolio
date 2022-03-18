function Project(props) {
  const { title, description, websiteURL, imageURL } = props;

  return (
    <div className="card text-light bg-dark h-100 project-card">
      <img src={imageURL} className="card-img-top portfolio-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <strong>{title}</strong>
        </h5>
        {description.map((para) => {
          return <p className="card-text">{para}</p>;
        })}
      </div>
      <div className="card-footer">
        <a href={websiteURL} class="btn btn-outline-light w-100">
          <strong>{title}</strong>{" "}
          <i className="fa-solid fa-up-right-from-square" />
        </a>
      </div>
    </div>
  );
}

export default Project;
