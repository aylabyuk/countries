import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import 'typeface-roboto';

import AppContainer from './appContainer';
import Layout from './components/Layout';


// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff',
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer.Provider>
          <Layout>
            <div>test</div>
          </Layout>
        </AppContainer.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
