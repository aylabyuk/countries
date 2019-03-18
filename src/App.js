import React, { Component } from 'react';
import 'typeface-roboto';

import Layout from './component/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <div>test</div>
        </Layout>
      </div>
    );
  }
}

export default App;
