import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';




const theme = {
    colors: {
        brandSecondary: '#ff9f4d',
        brandPrimary: '#16b4a1',
        white: '#fff',
        offWhite: '#ececec',
        grey: '#5e5e5e',
        liteGrey: '#9f9f9f',
    },
    font: {
        family: 'Ubuntu',
    },
};

const Theme = ({ children }) => {
    let [fontLoaded] = useFonts({
        'Ubuntu-Bold': require('../../assets/fonts/Ubuntu-Bold.ttf'),
        'Ubuntu-Regular': require('../../assets/fonts/Ubuntu-Regular.ttf'),
    });
    
    return (
        <ThemeProvider theme={theme}>
        {
            fontLoaded ? children : <AppLoading />
        }
        </ThemeProvider>
    );
};

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default Theme;