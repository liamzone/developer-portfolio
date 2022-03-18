function Note(props) {
  const { title, list } = props;

  return (
    <div className="card text-dark note h-100">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <img
            src="./images/thumbtack.png"
            alt="thumbtack"
            className="thumbtack"
          />
        </div>

        <h2 className="card-title">{title}</h2>
        <ul>
          {list.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Note;
