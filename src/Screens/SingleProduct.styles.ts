import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const LeftSide = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    height: 100%;
  }
  .thumbnail {
    width: 50px;
    height: 50px;
    border: 2px solid #000;
    object-fit: contain;
  }
`;

export const RightSide = styled.div`
  flex: 4;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
  h3 {
    font-size: 26px;
    font-weight: 700;
    margin-top: 0px;
    font-family: 'Lato', sans-serif;
    position: relative;
  }
  .productDescription {
    font-family: 'Alegreya Sans', sans-serif;
  }
  .productTitle::after {
    content: '';
    background: #303f9f;
    max-width: 20%;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -10px;
  }
`;

export const StyledPrice = styled.div`
  .productPrice {
    font-size: 30px;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    .productRealPrice {
      font-size: 20px !important;
      color: #f50057;
      padding-right: 10px;
      text-decoration: line-through;
    }
  }
`;

export const StyledQuantity = styled.div`
  display: flex;
  font-size: 20px;
  margin: 30px 0;
  .flex {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .innerDiv {
    display: flex;
    align-items: center;
    gap: 10px;
    input[type='text'] {
      max-width: 30px;
      font-size: 22px;
      border: none;
      border-top: 1px solid #3f51b5;
      border-bottom: 1px solid #3f51b5;
      text-align: center;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      outline: 0;
      padding: 5px;
    }
  }
  .quantity {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledButton = styled(Button)`
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

/*${({ theme }) => theme.colors.primaryColor};*/
