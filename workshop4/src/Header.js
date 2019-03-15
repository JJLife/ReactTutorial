import React, { Component } from 'react';

class App extends Component {



    render() {
    return (
      <div className="App">
          <h1> This is Header { this.props.title } </h1>
      </div>
    );
  }
}

export default App;
