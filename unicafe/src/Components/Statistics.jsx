const Statistics = ({ good, neutral, bad }) => {
  //calculate the total votes
  const total = good + neutral + bad;

  //calculate the average score
  const average = (good * 1 + neutral * 0 + bad * -1) / total;

  //calculate the percentage of feedback
  const percentage = good / total;

  return (
    <div>
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

export default Statistics;
