import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticTitle,
  StatisticsSection,
  StatisticsItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
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
    }).isRequired
  ).isRequired,
};
