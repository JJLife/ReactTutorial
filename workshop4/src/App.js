import React, { Component } from 'react';
import Header from './Header'
import LikeButton from './LikeButton'

class App extends Component {

  state = { likeMe : 0, 
            disLike : 0 }

  render() {
    const mytitle = "sample01"
    return (
      <div className="App">
          <Header title={mytitle} />
          <h1>Like : {this.state.likeMe} </h1>
          <h1>DisLike : {this.state.disLike} </h1>
          <LikeButton onClickLike={this.handeClick} like={true} />
          <LikeButton onClickLike={this.handeClick} />
      </div>
    );
  }

  handeClick = (like) => {  
    if(like) {
      this.setState( (prevState) => {
        return {
          likeMe : prevState.likeMe + 1
        }
      })
    } else {
      this.setState( (prevState) => {
        return {
          disLike : prevState.disLike + 1
        }
      })      
    }

  }

}

export default App;
