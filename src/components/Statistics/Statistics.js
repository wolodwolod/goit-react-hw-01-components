import PropTypes from 'prop-types';
import {
  StatisticSec,
  Title,
  Stats,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    
<StatisticSec>
{title && <Title>Upload stats</Title>}

    <Stats>
      {stats.map(({ id, label, percentage }) => (
        <StatsItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatsItem>))}
        </Stats>
    </StatisticSec>
      )
};
 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};