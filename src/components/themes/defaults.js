import overrides from './overrides';

export const lightTheme = {
    palette: {
        primary: {
            main: '#2e54d8',
            light: '#7080ff',
            dark: '#002ca5',
            contrastText: '#fff',
        },
        secondary: {
            main: '#7c266b',
            light: '#ad5599',
            dark: '#4d0040',
            contrastText: '#fff',
        },
        success: { main: '#2FCA74' },
        error: { main: '#B03524' },
        danger: { main: '#a83232' },
        info: { main: '#006581' },
        warning: { main: '#EE6F13' },
        dark: { main: '#282F37' },
        coolGrey: { main: '#878c91' },
        coldGrey: { main: '#dde1eb' },
        text: {
            primary: '#444',
            secondary: '#000',
            disabled: '#bbb',
            hint: '#333',
            primaryHover: '#2e54d8',
            secondaryHover: 'rgba(0, 0, 0, 0.38)',
        },
        background: { default: '#ddd', paper: '#fff' },
        custom: { menuHover: '#2e54d8', menuActive: '#2E54D8' },
        action: {
            disabled: '#ABA6A6',
            disabledBackground: '#E0E0E0',
        },
    },
    typography: {
        fontFamily: 'roboto',
        fontSize: 12,
        h1: {
            fontWeight: 600,
            fontSize: '1.30rem',
            lineHeight: 1.4,
            fontFamily: 'roboto',
            color: '#2e54d8',
        },
        h2: {
            fontWeight: 500,
            fontSize: '1.20rem',
            lineHeight: '1.4',
            fontFamily: 'roboto',
            color: '#2e54d8',
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.00rem',
            lineHeight: '1.4',
            fontFamily: 'roboto',
            color: '#2e54d8',
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.00rem',
            lineHeight: 1.4,
            fontFamily: 'roboto',
            color: '#2e54d8',
        },
        h5: {
            fontWeight: 600,
            fontSize: '0.90rem',
            lineHeight: '1.2',
            fontFamily: 'roboto',
            color: '#B0B8CA',
        },
        h6: {
            fontWeight: 500,
            fontSize: '0.90rem',
            lineHeight: 0.8,
            fontFamily: 'roboto',
            color: '#595D67',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.4,
            marginBottom: '10px',
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.4,
            marginBottom: '10px',
        },
    },
    border: {
        small: { radius: '4px', width: '1px', style: 'solid' },
        medium: { radius: '8px', width: '0px', style: 'solid' },
        large: { radius: '10px' },
    },
};
const darkTheme = {
    palette: {
        primary: {
            main: '#58b05c',
            light: '#58b05c',
            dark: '#58b05c',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#7b809a',
            light: '#8f93a9',
            dark: '#8f93a9',
            contrastText: '#ffffff',
        },
        success: {
            main: '#4CAF50',
        },
        error: {
            main: '#F44335',
        },
        danger: {
            main: '#a83232',
        },
        info: {
            main: '#1A73E8',
        },
        warning: {
            main: '#fb8c00',
        },
        dark: {
            main: '#282F37',
        },
        coolGrey: {
            main: '#414967',
        },
        coldGrey: {
            main: '#121830',
        },
        text: {
            primary: '#ffffff',
            secondary: '#FFFFFF',
            disabled: '#bbb',
            hint: '#ffffffcc',
        },
        background: {
            default: '#1a2035',
            paper: '#202940',
        },
        custom: {
            menuHover: '#58b05c',
            menuActive: '#58b05c',
        },
        action: {
            disabled: '#555765',
            disabledBackground: '#B6BBD6',
        },
    },
    typography: {
        fontFamily: 'roboto',
        fontSize: 12,
        h1: {
            fontWeight: 700,
            fontSize: '1.60rem',
            lineHeight: 1.4,
            fontFamily: 'roboto',
            color: '#B8BAC6',
        },
        h2: {
            fontWeight: 500,
            fontSize: '1.20rem',
            lineHeight: '1.4',
            fontFamily: 'roboto',
            color: '#B8BAC6',
        },
        h3: {
            fontWeight: 500,
            fontSize: '0.90rem',
            lineHeight: '1.6',
            fontFamily: 'roboto',
            color: '#B8BAC6',
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.00rem',
            lineHeight: 1.4,
            fontFamily: 'roboto',
            color: '#B8BAC6',
        },
        h5: {
            fontWeight: 700,
            fontSize: '0.90rem',
            lineHeight: 1.4,
            fontFamily: 'roboto',
            color: '#B8BAC6',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.4,
            marginBottom: '10px',
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.4,
            marginBottom: '10px',
        },
        h6: {
            fontFamily: 'roboto',
            fontWeight: 400,
            fontSize: '0.90rem',
            lineHeight: '1.4',
            color: '#ffffffcc',
        },
    },
    border: {
        small: {
            radius: '8px',
        },
        medium: {
            radius: '12px',
        },
        large: {
            radius: '16px',
        },
    },
};

export const defaultTheme = {
    ...lightTheme,
    overrides,
    props: {
        MuiModal: {
            disableScrollLock: true,
        },
    },
};

export const themes = [
    {
        label: 'Default Light Theme',
        value: 'light',
        theme: lightTheme,
    },
    {
        label: 'Default Dark Theme',
        value: 'dark',
        theme: darkTheme,
    },
];

export default themes;

/*
[
            'proxima-nova',
            'itc-avant-garde-gothic-pro',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
 */
