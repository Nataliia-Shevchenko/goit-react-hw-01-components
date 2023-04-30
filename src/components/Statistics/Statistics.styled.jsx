import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-left: 20px;
  margin-bottom: 20px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const GetRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${GetRandomHexColor()};
  font-size: 30px;
`;
