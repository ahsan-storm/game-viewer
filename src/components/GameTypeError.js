import React, { Component } from 'react';

export default class GameTypeError extends Component {
    render(){
        return(
            <div>
            {this.props.gameTypeError &&
                <p className="game-type-error text-center"><strong>Whoops, looks like you have entered a wrong game type. Supported game types are V75, V65, V64, V4 (case sensitive)</strong></p>}
            </div>        
        )
    }
}