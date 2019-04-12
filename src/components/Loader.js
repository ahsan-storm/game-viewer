import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

export default class GameTypeError extends Component {
    render(){
        return(
            <div className="text-center">
                {this.props.showLoader &&
                <Loader 
                type="Audio"
                color="black"
                height="100"	
                width="100"
                />}  
            </div>    
        )
    }
}