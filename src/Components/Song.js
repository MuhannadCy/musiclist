import React, {Component} from 'react'
import FavoriteCheck from './FavoriteCheck'

// class Song extends Component{
//     render(){
//         return(
//             <div onClick={() => this.props.handleDetailsClick(this.props.name)}>
//                 <h1>{this.props.name}</h1>
//                 <p>By {this.props.artist}</p>
//                 <FavoriteCheck isFave={this.props.isFave} onFaveToggle={this.onFaveToggle} />
//             </div>
//         )
//     }

// }
const Song = props =>{
    return(
                    <div onClick={() => props.handleDetailsClick(props.name)}>
                        <h1>{props.name}</h1>
                        <p>By {props.artist}</p>
                        <FavoriteCheck isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
                    </div>
                )
}
export default Song;