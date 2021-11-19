import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Termos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin:auto;
`;
const Steps = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin:auto;
  margin-top: 20px;
  p{
    font-size: 25px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
`;

export const Assinatura = {
  Wrapper,
  Container,
  Buttons,
  Termos,
  Steps,
};
