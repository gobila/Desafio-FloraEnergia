import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from './style';
import Text from '../Text';

export default function Card({ postTitle, postBody }) {
  return (
    <CardWrapper.Container>
      <CardWrapper.Title>
        <Text tag="h2">{postTitle}</Text>
      </CardWrapper.Title>
      <CardWrapper.Body>
        <Text tag="p" variant="">{postBody}</Text>
      </CardWrapper.Body>
    </CardWrapper.Container>
  );
}

Card.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
};
