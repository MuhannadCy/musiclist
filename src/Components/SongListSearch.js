import React, {Component} from 'react'
import Song from './Song'

class SongListSearch extends Component{
    render(){
        const allSongs = this.props.songs.map((song, index) =>{
            return(
                <Song name={song.name} key={index} artist={song.artist} handleDetailsClick={() => this.props.handleDetailsClick(song)} isFave={(this.props.faves.includes(song) <= 0) ? false : true} onFaveToggle={() =>this.props.onFaveToggle(song)}></Song>
            )
        })
        return(
            <div>
                {allSongs}
            </div>
        )
    }

}
export default SongListSearch;