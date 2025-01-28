import { useState } from "react";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Statistics from "./Components/Statistics";

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

  return (
    <div>
      <Header />
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
