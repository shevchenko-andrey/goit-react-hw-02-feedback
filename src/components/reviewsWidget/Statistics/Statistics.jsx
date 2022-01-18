import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li>
        <span>good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>total:</span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{positivePercentage ? positivePercentage : 0}%</span>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
