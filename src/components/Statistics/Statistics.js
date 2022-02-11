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

 stats.defaultProps = {
      id: String(Math.round((Math.random() * (1000 - 1)))),
      label: "Unknown",
      percentage: 0
};  
  
  const StatsMap =
    stats.map(({ id, label, percentage }) => (
          
      <StatsItem key={id}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
            
        </StatsItem>));
  
  return (
   <StatisticSec>
{title && <Title>Upload stats</Title>}

      <Stats>     
        {StatsMap}
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