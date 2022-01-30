import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  text-align: center;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    width: 100%;
    max-height: 115px;
    height: 100%;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    p {
      min-height: 50px;
    }
  }
  h3.price {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
  h3.product-title {
    min-height: 70px;
    font-weight: bold;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;
