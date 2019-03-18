import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { BrowserRouter as Router, Route } from "react-router-dom"

import 'typeface-roboto';

import AppContainer from './appContainer';
import Layout from './components/layout';
import Home from './pages/Home';
import Continent from './pages/Continent';
import Country from './pages/Country';

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
        <Router>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/:continent" exact component={Continent} />
            <Route path="/:continent/:country" exact component={Country} />
          </Layout>
          </Router>
        </AppContainer.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
