const Exercise = (props) => {
  const { part } = props;
  const { exercise } = props;
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

export default Exercise;
