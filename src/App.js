import React, { Component } from 'react';
import './App.css';
import moment from "moment";
import 'react-accessible-accordion/dist/fancy-example.css';
import {PROXY_HOST, ATG_GAMES, ATG_PRODUCTS, SUPPORTED_GAME_TYPES} from './constants/AppConstants';
import GameTypeError from './components/GameTypeError';
import LineSeperator from './components/LineSeperator';
import CustomLoader from './components/Loader';
import GameInformation from './components/GameInformation';
import GameDetails from './components/GameDetails';
import GameTypeSearch from './components/GameTypeSearch';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      gameType: '',
      gameTypeError: false,
      gameInfoLoading: false,
      gameDetailsLoading: false,
      gameData: {},
      gameDetails: {},
      closestUpcomingGame: {},
      closestResultsGame: {}
    }
  }
  
  fetchRacingInfoFromGameType = () => {
    this.setState({
      gameTypeError: false,
      gameData: {},
      gameDetails: {}
    })

    if (SUPPORTED_GAME_TYPES.includes(this.state.gameType)) {
      this.setState({
        gameInfoLoading : true,
      })
  
      fetch(PROXY_HOST + ATG_PRODUCTS + this.state.gameType).then(response => {
        response.json().then(jsonResponse => {
          this.setState({
            gameData: jsonResponse,
            gameInfoLoading: false
          })
        
          this.setClosestUpcomingAndResultsGame(this.state.gameData);
        })
      })
    } else {
      this.setState({
        gameTypeError: true
      })
    }
  }

  setClosestUpcomingAndResultsGame = (gameDate) => {
    if (gameDate.upcoming.length > 0) {
      let minDate = moment(moment.min(gameDate.upcoming.map(race => moment(race.startTime))))
      let closestUpcomingGame = gameDate.upcoming.find(race => minDate.isSame(race.startTime));
     
      this.setState({
        closestUpcomingGame: closestUpcomingGame
      })
    } else if (gameDate.results.length > 0) {
      let maxDate = moment(moment.max(gameDate.results.map(race => moment(race.startTime))))
      let closestResultsGame = gameDate.results.find(race => maxDate.isSame(race.startTime));

      this.setState({
        closestResultsGame: closestResultsGame
      })
    }
  }

  gameTypeInputChanged = (e) => {
    this.setState({
      gameType: e.target.value
    })
  }

  fetchGameDetails = (id) => {
     this.setState({
      gameDetailsLoading : true,
    })

    fetch(PROXY_HOST + ATG_GAMES + id).then(response => {
      response.json().then(jsonResponse => {
        this.setState({
          gameDetailsLoading : false,
          gameDetails: jsonResponse
        })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <GameTypeSearch 
          gameTypeInputChanged = {this.gameTypeInputChanged}
          fetchRacingInfoFromGameType = {this.fetchRacingInfoFromGameType}/>

        <GameTypeError gameTypeError={this.state.gameTypeError}/>

        <LineSeperator align="center" width="80%"/>

        <CustomLoader showLoader={this.state.gameInfoLoading}/>
        
        <GameInformation 
          showGameInfo={this.state.gameInfoLoading} 
          gameData={this.state.gameData}
          closestUpcomingGame={this.state.closestUpcomingGame}
          closestResultsGame={this.state.closestResultsGame}
          fetchGameDetails={this.fetchGameDetails}/>
        
        <CustomLoader showLoader={this.state.gameDetailsLoading}/>

        <GameDetails
          showGameDetails={this.state.gameDetailsLoading}
          gameDetails={this.state.gameDetails}/>
      </div>
    );
  }
}

export default App;
