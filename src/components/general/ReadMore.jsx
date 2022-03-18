function ReadMore(props) {
  return (
    <p
      role="button"
      onClick={() => {
        props.toggleExpanded();
      }}
    >
      Read more
    </p>
  );
}

export default ReadMore;
