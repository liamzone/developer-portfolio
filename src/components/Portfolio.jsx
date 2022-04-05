import Project from "./portfolio/Project";
import Projects from "./portfolio/Projects";

function Portfolio() {
  function fetchImage(project) {
    const projectImageURL = "./images/projects/";
    return project.imageURL
      ? projectImageURL + project.imageURL
      : projectImageURL + "no-image.png";
  }

  return (
    <div className="row gy-4">
      {Projects.map((project) => {
        return project.websiteURL ? (
          <div className="col d-grid justify-content-center">
            <Project
              title={project.title}
              description={project.description}
              websiteURL={project.websiteURL}
              imageURL={fetchImage(project)}
            />
          </div>
        ) : null;
      })}
    </div>
  );
}

export default Portfolio;
