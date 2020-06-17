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

Input.propTypes = {
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  maxLength: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Input.defaultProps = {
  inputStyle: {},
  maxLength: 10,
  style: {},
};

export default forwardRef(Input);