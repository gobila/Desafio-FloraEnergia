import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const ContainerForm = styled.form`
  display: flex;
  align-items: center;
  /* margin: auto; */
  label{
    ${breakpointsMedia({
    xs: css`
      display: flex;
      flex-direction: column;
      width:100%;
    `,
    md: css`
      flex-direction: row;
      justify-content: space-between
    `,
  })}
  }
  ${breakpointsMedia({
    xs: css`
      width:90%;
      flex-direction: column;
      justify-content: center;
    `,
    md: css`
      width:80%;
      flex-direction: row;
      justify-content: space-between;
    `,
  })}
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  flex-wrap: wrap;
`;

const Result = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Termos = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin:auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = {
  Wrapper,
  Container,
  ContainerForm,
  Result,
  Buttons,
  Termos,
};
