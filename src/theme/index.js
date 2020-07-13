import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const theme = {
    colors: {
        brandPrimary: '#16b4a1',
        brandSecondary: '#ff9f4d',
        white: '#fff',
        offWhite: '#ececec',
        grey: '#5e5e5e',
        greyLight: '#9f9f9f',
        greyDark: '#afafaf',
    },
    font: {
        family: {
            ubuntuRegular: 'Ubuntu-Regular',
            ubuntuBold: 'Ubuntu-Bold'
        },
        size: {
            title: '20px',
            body: '16px',
            caption: '14px',
        },
        weight: {
            normal: 'normal',
            bold: 'bold',
        },
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