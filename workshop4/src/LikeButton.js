import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={this.handleClick}>{this.props.like ? "Like Me" : "Dis Like"}</button>
      </div>
    );
  }

  handleClick = () => {
       this.props.onClickLike(this.props.like)
  }

}
export default App;
