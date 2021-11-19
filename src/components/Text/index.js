import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TextBase = styled.span`
    /* font-size: 18px; */
    ${({ variant }) => {
    if (variant === 'destaque') {
      return css`
        font-size: 18px;
        text-decoration: underline;
        align-self:flex-start;
        margin:5px
      `;
    }
    if (variant === 'aviso') {
      return css`
        font-size: 16px;
        margin:5px;
      `;
    }
    if (variant === 'bold') {
      return css`
        font-weight:bold;
        color:${({ theme }) => theme.colors.button.main.color}
      `;
    }
    return '';
  }}
`;

export default function Text({ children, tag, variant }, props) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  // tag: 'span',
  children: null,
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.string,
  variant: PropTypes.string,
};
