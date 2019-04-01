import React, { Component } from 'react';
import Header from './Header'
import LikeButton from './LikeButton'
import Sidebar from './Sidebar'

class App extends Component {

  state = { likeMe : 0, 
            disLike : 0 }

  render() {
    const mytitle = "sample01"
    return (
      <div className="App">
          <Header title={mytitle} caption="Hello World"/>
          {/* <h1>Like : {this.state.likeMe} </h1>
          <h1>DisLike : {this.state.disLike} </h1>
          <LikeButton onClickLike={this.handeClick} like={true} />
          <LikeButton onClickLike={this.handeClick} /> */}
          <Sidebar>
            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
              <li>Menu 4</li>
            </ul>
          </Sidebar>
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
