import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout.js';
import ParentComponent from './ParentComponent.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;