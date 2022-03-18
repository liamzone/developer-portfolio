function List(props) {
  return (
    <div>
      <h3>{props.listTitle}</h3>
      <ul>
        {props.data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
