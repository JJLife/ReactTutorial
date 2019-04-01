import React from 'react';

const App = (props) => {

  return (
    <div>
      <button onClick={props.onClickLike}>LIKE ME</button>
    </div>
  )
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <button onClick={this.handleClick}>{this.props.like ? "Like Me" : "Dis Like"}</button>
//       </div>
//     );
//   }

//   handleClick = () => {
//        this.props.onClickLike(this.props.like)
//   }
// }

