import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

export default class GameTypeError extends Component {
    render(){
        return(
            <div>
                <h1 className="display-3 text-center"><strong>Game Directory</strong></h1>
                <div className="game-type-section">
                <InputGroup className="game-type-input-group">
                    <InputGroupAddon addonType="prepend">Enter game type</InputGroupAddon>
                    <Input onChange={this.props.gameTypeInputChanged} placeholder="e.g. V75, V65, V64, V4" />
                </InputGroup>
                <Button className="search-button" color="primary" onClick={this.props.fetchRacingInfoFromGameType}>Search</Button>
                </div>
            </div>    
        )
    }
}