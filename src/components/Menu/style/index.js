import styled, { css } from 'styled-components';

export const MenuWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.button.helper.color};
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
export const MenuLogo = styled.div`
  width: 50%;
  align-self: center;
  padding: 10px;
  padding-left: 20px;
`;
export const MenuLinks = styled.div`
  width: 50%;
  text-align:right;  
  padding-right:20px;
  a{
    color: ${({ theme }) => theme.colors.button.helper.contrastColor};
    text-decoration: none;
    line-height: 1.4;
    font-size: 20px;
    margin: 10px;
    padding:2px;
    :hover{
      color: ${({ theme }) => theme.colors.button.emphasis.color};
      font-weight: bold;
    }
  }
`;
