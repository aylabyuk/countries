import React, { Component } from 'react';
import 'typeface-roboto';

import AppContainer from './appContainer';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <AppContainer.Provider>
        <Layout>
          <div>test</div>
        </Layout>
      </AppContainer.Provider>
    );
  }
}

export default App;
