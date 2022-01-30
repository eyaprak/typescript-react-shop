import styled from 'styled-components';
import { Link } from 'react-router-dom';

type PropTypes = {
  marginTop?: string;
};

export const Container = styled.div<PropTypes>`
  max-width: 1140px;
  margin: ${({ marginTop }) =>
    marginTop ? marginTop + 'px auto 0 auto' : '84px auto 0 auto'};
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
