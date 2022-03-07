import Static from "./Static";

const Statics = ({ good, neutral, bad }) => {
  let total = bad + neutral + good;
  let average = (neutral + good - bad) / total;
  let positive = good > 0 ? (good / total) * 100 : 0;

  if (total === 0) {
    return <h2>No Feedback Given</h2>;
  } else {
    return (
      <table>
        <tbody>
          <Static type="Good" state={good} />
          <Static type="Neutral" state={neutral} />
          <Static type="Bad" state={bad} />
          <Static type="All" state={total} />
          <Static type="Average" state={average} />
          <Static type="Positives" state={positive} />
        </tbody>
      </table>
    );
  }
};

export default Statics;
