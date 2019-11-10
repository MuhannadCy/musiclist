import React, {Component} from 'react'




class SongDetails extends Component{
    render(){
        let allSimilar = "This song is too perfect to have any similar songs"
        if(this.props.similar.length){
        allSimilar = this.props.similar.map((song, index )=>{
            return(<div key={index}><a href= {song.url} target={"_blank"}>{song.name} by {song.artist.name}</a></div>)
        })
        }
        let details= <div></div>
        if(this.props.song.artist){
            details = (<div>
                <h1>Details</h1>
                <h1>{this.props.song.name}</h1>  
                <h2>By: {this.props.song.artist.name}</h2>
                <div ><a className= "more-details" href= {this.props.song.url} target={"_blank"}> Listen to the song</a></div>
                <div ><a className= "more-details" href= {this.props.song.artist.url} target={"_blank"}> More about the artist</a></div>
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
export default SongDetails;