import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import Search from './Pages/Search';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: [],
      current: {},
      songs:[],
      similar: [],
      result: []
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
  }
  componentDidMount() {
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json`)
      .then(res => {
        const songs = res.data.tracks.track;
        this.setState({ songs: songs });
      })
  }
  handleSearch = (song) =>{
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&limit=20&track=${song}&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json `)
    .then(res => {
      const result = res.data.results.trackmatches.track;
      this.setState({ 
        result: result
      })
  
  })
  }
  handleFaveToggle = (song) => {
    const faves = this.state.faves.slice();
    const songIndex = faves.indexOf(song)
    if (songIndex >= 0) {
      faves.splice(songIndex, 1)
      
    }
    else {
      faves.push(song);
      
    }
    this.setState({ faves });
  }
  handleDetailsClick = (song) => {
    let similar;
    if(song.artist.name){
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&limit=10&artist=${song.artist.name}&track=${song.name}&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json `)
    .then(res => {
      similar = res.data.similartracks.track;
      this.setState({ 
        current: song,
        similar: similar 
      })
  
  })
  }
  else{
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&limit=10&artist=${song.artist}&track=${song.name}&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json `)
    .then(res => {
      similar = res.data.similartracks.track;
      this.setState({ 
        current: song,
        similar: similar 
      })
  })
  .catch(function (error) {
    console.log(error);
  })
  }

}
  render(){
  return (
    <Router>
      <nav>
        <Link className = "Link" to="/">Home</Link>{' '}
        <Link className = "Link" to="/favorite">Favorite</Link>{' '}
        <Link className = "Link" to="/search">Search</Link>
      </nav>
      <div>
        <Route exact path = "/" component={() => <Home songs = {this.state.songs} handleDetailsClick={this.handleDetailsClick} current={this.state.current} similar = {this.state.similar} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}/>}/>
        <Route path = "/favorite" component={() => <Favorite songs = {this.state.faves} handleDetailsClick={this.handleDetailsClick} current={this.state.current} similar = {this.state.similar} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}/>}/>/>
        <Route path  = "/search" component={() => <Search search = {this.handleSearch} songs = {this.state.result} handleDetailsClick={this.handleDetailsClick} current={this.state.current} similar = {this.state.similar} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}/>}/>/>

      </div>
    </Router>
  );
}
}

export default App;
