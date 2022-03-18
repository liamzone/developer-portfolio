function Section(props) {
  const { header, section } = props;
  return (
    <section id={header.toLowerCase()}>
      <div className="container">
        <h2 className="section-header">{header}</h2>
        {/*Place Content Here */}
        {section}
      </div>
    </section>
  );
}

export default Section;
