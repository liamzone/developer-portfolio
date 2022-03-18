import Project from "./portfolio/Project";

function Portfolio() {
  const projects = [
    {
      title: "Aviva Bites",
      description: [
        "Aviva Bites was a final year project by a group of BSc Food Science students from Stellenbosch.",
        "I created a simple website (using HTML, CSS and Javascript) to aid in their final product presentation.",
      ],
      websiteURL: "https://avivabites.co.za",
      imageURL: "aviva-bites.png",
    },
    {
      title: "Keeper App",
      description: [],
      websiteURL: "",
      imageURL: "",
    },
    {
      title: "LIAMZONE",
      description: ["Designed for LIAMZONE."],
      websiteURL: "",
      imageURL: "",
    },
  ];

  function fetchImage(project) {
    const projectImageURL = "./images/projects/";
    return project.imageURL
      ? projectImageURL + project.imageURL
      : projectImageURL + "no-image.png";
  }

  return (
    <div className="row gy-4">
      {projects.map((project) => {
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
