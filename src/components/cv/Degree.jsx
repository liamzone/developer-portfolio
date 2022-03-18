function Job(props) {
  const { institution, degree, topSkills, date, link } = props.degree;

  return (
    //Card Example
    <div className="card text-white bg-dark h-100">
      <div className="card-body">
        <h5 className="card-title">{institution}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{degree}</h6>
        <ul>
          {topSkills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between">
        <p className="mb-0">
          {date.startDate} - {date.endDate}
        </p>
        {link && (
          <div>
            <a href={link} className="mb-0 text-white">
              View Online
            </a>{" "}
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Job;
