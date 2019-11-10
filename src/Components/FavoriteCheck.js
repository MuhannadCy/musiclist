import React, { Component } from 'react'

class FavoriteCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.props.onFaveToggle()
    };

    render() {

        return (
            <div onClick={this.handleClick}>
                <img src={(this.props.isFave) ? "../images/emptyHeart" : "../images/fullHeart"} alt={(this.props.isFave) ? "Full Heart" : "Empty Heart"}></img>
            </div>
        );
    }
}

export default FavoriteCheck;