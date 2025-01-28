import { useState } from "react";
import Header from "./Components/Header";
import Button from "./Components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("customer clicked good");
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    console.log("customer clicked neutral");
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    console.log("customer clicked bad");
    setBad(bad + 1);
  };

  //calculate the total votes
  const total = good + neutral + bad;

  //calculate the average score
  const average = (good * 1 + neutral * 0 + bad * -1) / total;

  //calculate the percentage of feedback
  const percentage = good / total;

  return (
    <div>
      <Header />
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />

      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {average}</p>
      <p>positive: {percentage * 100}%</p>
    </div>
  );
};

export default App;
