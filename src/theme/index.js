import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryButton: '#ff9f4d',
        primaryControl: '#16b4a1',
        primaryBackgroundGradient: {
            bottom: '#48ced7',
            top: '#16b4a0',
        },
        primaryBackground: '#fff',
        disabledButtonBackground: '#ececec',
        primaryText: '#5e5e5e',
        buttonTextEnable: '#fff',
        buttonTextDisable: '#9f9f9f',
    },
    font: {
        family: 'Ubuntu',
    },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default Theme;