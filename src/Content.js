import Exercise from "./Exercise.js";
const Content = (props) => {
  const { parts } = props;

  return (
    <div>
      <Exercise part={parts[0].name} exercise={parts[0].exercises} />
      <Exercise part={parts[1].name} exercise={parts[1].exercises} />
      <Exercise part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  );
};
export default Content;
