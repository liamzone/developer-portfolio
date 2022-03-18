import Job from "./Job";
import pastWork from "./PastWork";

function Experience() {
  return (
    <div>
      <h1>Work Experience</h1>

      {pastWork.map((job) => {
        return <Job job={job} />;
      })}
    </div>
  );
}

export default Experience;
