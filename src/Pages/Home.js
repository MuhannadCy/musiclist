import React, {Component} from 'react'
import SongList from '../Components/SongsList'
import SongDetails from '../Components/SongDetails'
import '../App.css';

class Home extends Component{
    render(){
        return(
            <div>
            <h1>Home</h1>
            <div className="container">
            <div className= "list">
                <SongList songs={this.props.songs} handleDetailsClick={this.props.handleDetailsClick} faves={this.props.faves} onFaveToggle={this.props.onFaveToggle}></SongList>
            </div>
            <div className = "details">
                <SongDetails song = {this.props.current} similar = {this.props.similar}></SongDetails>
            </div>
            </div>
            </div>
        )

    }
}
export default Home;