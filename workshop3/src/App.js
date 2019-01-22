import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MovieItem from './Movieitem';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = { rows : [] }
  }

  componentDidMount() {
    this.serach('The Avenger')
  }

  serach = (keyword) => {
    var data_movie = []
    var url = "https://api.themoviedb.org/3/search/movie?api_key=c7cec26323e4f9a166f918369748da68&query=" + keyword;
    axios.get(url).then(result => {

      result.data.results.forEach(element => {
        element.poster_src = "https://image.tmdb.org/t/p/w185" + element.poster_path

        data_movie.push(element)
      });

      this.setState({rows : data_movie})

    })
  } 

  render() {
    var title = "JJamesFils-React.js"
    return (
      <div className="App">
          {/* JSX (Javascript + XML) */}
          <table className="Navbar">
            <tbody>
              <tr>
                <td>
                  <img src={require('./assets/logo.svg')} width="50" />
                </td>
                <td>
                  {title}
                </td>
              </tr>
            </tbody>
          </table>

          <input style={{fontSize: 24, display: "block", width:"100%", paddingLeft : 8}}
              placeholder="Enter your movie keyword"
              onChange={(event)=> { this.serach(event.target.value)} }/>    

          {
            this.state.rows.map( item => (
              <MovieItem movie={item} />
            ))
          }


      </div>


    );
  }
}


export default App;
