import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextBase = styled.span`
    font-size: 18px;
`;

export default function Text({ children, tag, variant }, props) {
  return (
    <TextBase
      tag={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  children: null,
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.string,
  tag: PropTypes.string,
  variant: PropTypes.string,
};
