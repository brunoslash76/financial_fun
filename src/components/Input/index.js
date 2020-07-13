import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, inputStyle, maxLength, ...rest  }, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} style={inputStyle} maxLength={maxLength} />
    </Container>
  );
}

export default forwardRef(Input);