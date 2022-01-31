import styled from 'styled-components';

export const StyledTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  text-align: center;
  font-size: 26px !important;
  font-family: 'Lato', sans-serif;
  color: #3f51b5;
  position: relative;
  margin-bottom: 50px;
  &::after {
    content: '';
    height: 2px;
    background-color: #eee;
    position: absolute;
    bottom: -15px;
    transform: translate(-50%, -50%);
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    left: 50%;
  }
`;
