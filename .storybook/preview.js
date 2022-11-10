import { ThemeProvider, createMuiTheme } from '@material-ui/core';
// import defaultTheme from '../src/components/themes/default';
import { defaultTheme } from '../src/components/themes/defaults';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = createMuiTheme(defaultTheme);

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
