import styled from '@emotion/styled';
export const ButtonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;

export const ButtonListItem = styled.li`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #3a74c0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #41549e;
  }

  &:active {
    background-color: #41549e;
  }
`;
