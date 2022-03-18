import Degree from "./Degree";
import qualifications from "./Qualifications";

function Education(props) {
  return (
    <div>
      <h2 className="section-header">{props.header}</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {qualifications.map((degree) => {
          return (
            <div className="col-6">
              <Degree degree={degree} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
