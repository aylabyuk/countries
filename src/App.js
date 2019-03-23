import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { Router, Route } from "react-router-dom"
import { createHashHistory } from 'history';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
 
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

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <AppContainer.Provider>
            <Router  history={hashHistory}>
              <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/:continent" exact component={Continent} />
                <Route path="/:continent/:country" exact component={Country} />
              </Layout>
            </Router>
          </AppContainer.Provider>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
