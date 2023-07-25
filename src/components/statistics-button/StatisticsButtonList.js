import React from 'react';
import {
  ButtonListItem,
  Button,
  ButtonList,
} from 'components/statistics-button/StatisticsButtonList.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonListItem key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;
