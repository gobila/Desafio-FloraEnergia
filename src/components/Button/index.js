import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ButtonEmphasis = css`
  background-color: ${({ theme }) => theme.colors.button.emphasis.color};
  color: ${({ theme }) => theme.colors.button.emphasis.contrastColor};
`;
const ButtonDefault = css`
  background-color: ${({ theme }) => theme.colors.button.main.color};
  color: ${({ theme }) => theme.colors.button.main.contrastColor};
`;

const ButtonBase = styled.button`
  ${({ variant }) => {
    if (variant === 'emphasis') {
      return ButtonEmphasis;
    }
    return ButtonDefault;
  }}
  border-radius: 25px;
  line-height: 1.7;
  border: 0px;
  width: 150px;
  :hover{
    cursor:pointer;
    opacity: 0.6;
  }
`;

export default function Button({
  children, tag, variant, ...props
}) {
  return (
    <ButtonBase
      variant={variant}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  children: null,
  tag: 'span',
  variant: 'paragraph1',
};

Button.propTypes = {
  children: PropTypes.string,
  tag: PropTypes.string,
  variant: PropTypes.string,
};
