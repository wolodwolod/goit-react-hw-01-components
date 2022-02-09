import styled from 'styled-components';


export const StatisticSec = styled.section`
  margin: 20px auto 0 auto;
  width: 300px;
  background-color: #fafafa;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 16px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}