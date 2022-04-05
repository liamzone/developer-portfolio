import Note from "../summary/Note";

function Summary() {
  const frontEndSkills = ["Bootstrap", "TailwindCSS", "React.js"];
  const backEndSkills = ["Node.js", "MongoDB"];
  const otherSkills = ["RESTful APIs", "Express.js"];

  return (
    <div>
      <div className="card text-white bg-dark">
        <div className="card-body">
          <h2 className="card-title">Professional Summary</h2>
          <p className="card-text">
            I am an Information Technology graduate from{" "}
            <strong>Pearson Institute of Higher Education</strong>. My passions
            include software development, esports and film & animation. My
            interests and experiences range from building and maintaining PCs to
            developing websites and solutions for individuals. I enjoy using my
            knowledge to help others wherever possible. I am looking for
            opportunities to grow my skills and gain work experience within the
            professional world.
          </p>

          {/*Skill Summary*/}
          <hr />
          <div className="row gy-4">
            <div className="col d-grid justify-content-center">
              <Note title="Frontend" list={frontEndSkills} />
            </div>
            <div className="col d-grid justify-content-center">
              <Note title="Backend" list={backEndSkills} />
            </div>
            <div className="col d-grid justify-content-center">
              <Note title="Other" list={otherSkills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
