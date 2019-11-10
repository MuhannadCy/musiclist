import React, {Component} from 'react'




class SongDetailsSearch extends Component{
    render(){
        let allSimilar = "This song is too perfect to have any similar songs"
        
        if(this.props.similar.length){
        let similar = this.props.similar;
        allSimilar = similar.map((song, index)=>{
            return(<div key={index}><a href= {song.url} target={"_blank"}>{song.name} by {song.artist.name}</a></div>)
        })
        }
        
        
        let details= <div></div>
        if(this.props.song.artist){
            let artist = this.props.song.artist
            let song = this.props.song.name
            details = (<div>
                <h1>Details</h1>
                <h1>{song}</h1>  
                <h2>By: {artist}</h2>
                <div ><a className= "more-details" href= {this.props.song.url} target={"_blank"}> Listen to the song</a></div>
                <h2>Simialr Songs</h2>
                {allSimilar}
            </div>)}
        return(
            <div className="details1">
                {details}
            </div>
        )
    }

}
export default SongDetailsSearch;