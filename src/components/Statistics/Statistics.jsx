import PropTypes from 'prop-types';
import {
  StatisticsList, StatisticsSection, StatisticsItem
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && (<h2 className="title">{title}</h2>)}

      <StatisticsList>
        {stats.map(event => (
          <StatisticsItem key={event.id}>
            <span className="label">{event.label}</span>
            <span className="percentage">{event.percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
