import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 2;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    background: #3f51b5;
    color: white;
    border-radius: 10rem;
    padding: 8px 13px;
  }
`;
export const StyledCartList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 0px;
  li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.3);
    .title {
      max-width: 250px;
    }
    .price {
      color: #333;
    }
  }
`;
