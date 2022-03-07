import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Statics from "./Statics";
import Title from "./Title";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelClicks = (event) => {
    let type = event.target.innerHTML;
    switch (type) {
      case "Good":
        setGood(good + 1);
        break;
      case "Neutral":
        setNeutral(neutral + 1);
        break;
      case "Bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Title title="Give Feedback" />
      <Button handelFunction={handelClicks} text="Good" />
      <Button handelFunction={handelClicks} text="Neutral" />
      <Button handelFunction={handelClicks} text="Bad" />
      <Title title="Statics" />
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
