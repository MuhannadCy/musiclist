import React, {Component} from 'react'
import SongDetailsSearch from '../Components/SongDetailsSearch'
import SongListSearch from '../Components/SongListSearch'

class Search extends Component{
    handleSearch= (e) =>{
        e.preventDefault()
        this.props.search(this.query.value)
    }
    render(){
        return(
        <div>
            <h1>Search</h1>
        <form onSubmit={this.handleSearch}> 
            <input placeholder="Enter Song Name" ref ={input => this.query = input}/>
            <button type="submit">Enter</button>
        </form>
        <h1>Results</h1>
                    <div className="container">
                    <div className= "list">
                        <SongListSearch  songs={this.props.songs} handleDetailsClick={this.props.handleDetailsClick} faves={this.props.faves} onFaveToggle={this.props.onFaveToggle}></SongListSearch>
                    </div>
                    <div className = "details">
                        <SongDetailsSearch song = {this.props.current} similar = {this.props.similar}></SongDetailsSearch>
                    </div>
                    </div>
        </div>
        )

    }
}
export default Search;