import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 18%;
  margin-bottom:2%;
  padding:2%;
  box-shadow: 0px 0px 10px 1px;
  /* height: 250px; */
  ${breakpointsMedia({
    xs: css`
      width:90%;
      height: auto;
    `,
    sm: css`
      width:80%;
    `,
    md: css`
      width:45%;
      height: 250px;
    `,
    lg: css`
      width:30%;
      height: 300px;
    `,
    xxl: css`
      width:22%;
      height: 320px;
    `,
  })}
`;
const Title = styled.div`
  font-size: 20px;
  font-weight:bold;
  height: 40%;
`;

const Body = styled.div`
  font-size: 16px;
  height: 60%;
`;

export const CardWrapper = {
  Container,
  Title,
  Body,
};
