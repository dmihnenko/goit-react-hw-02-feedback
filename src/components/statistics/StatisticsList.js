import React from 'react';
import {
  StatisticsListItem,
  StatisticsList,
} from 'components/statistics/StatisticsList.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positivePercentage}%
      </StatisticsListItem>
    </StatisticsList>
  );
};

export default Statistics;
