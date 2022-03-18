function Job(props) {
  const { employer, jobRole, skills, date } = props.job;

  return (
    //Card Example
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{employer}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{jobRole}</h6>
        <ul>
          {skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="card-footer text-muted">
        {date.startDate} - {date.endDate}
      </div>
    </div>
  );
}

export default Job;
