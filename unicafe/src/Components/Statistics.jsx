import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  //calculate the total votes
  const total = good + neutral + bad;

  //calculate the average score
  const average = (good * 1 + neutral * 0 + bad * -1) / total;

  //calculate the percentage of feedback
  const percentage = good / total;

  if (total === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="percentage" value={percentage + "%"} />
          </tbody>
        </table>
      </div>
    );
  }
};

export default Statistics;
