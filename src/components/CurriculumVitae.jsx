import Education from "./cv/Education";
import Summary from "./cv/Summary";
import LinkedInBadge from "./general/LinkedInBadge";

function CurriculumVitae() {
  return (
    <div className="container">
      <section>
        <div className="row">
          <div className="col-lg-8">
            <header>
              <h1 className="page-header">Full Stack Developer</h1>
            </header>
            <section>
              <Summary />
            </section>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <LinkedInBadge />
          </div>
        </div>
      </section>

      <section id="qualifications">
        <Education header="Qualifications" />
      </section>
    </div>
  );
}

export default CurriculumVitae;
