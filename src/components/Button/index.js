import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, isLoading, disabled , ...rest }) {

  return (
    <Container disabled={disabled} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text disabled={disabled} >{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};