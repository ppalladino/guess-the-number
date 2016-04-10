import './main.css';

import AppBar from 'material-ui/lib/app-bar';
import Game from 'components/game.js';
import GameConfiguration from 'components/game-configuration.js';
import Notification from 'components/notification';
import React from 'react';
import gameLogic from 'services/game-logic';

class GuessTheNumberContainer extends React.Component {

  constructor() {
    super();
    this.state = this.getResetState(0, 10);
    this.handleErrorAddressed = this.handleErrorAddressed.bind(this);
    this.handleMakeGuess = this.handleMakeGuess.bind(this);
    this.handleMessageViewed = this.handleMessageViewed.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  getResetState(lowerBound, upperBound) {
    return {
      error: null,
      guess: null,
      lastGuess: null,
      lowerBound,
      upperBound,
      theNumber: gameLogic.generateTheNumber(lowerBound, upperBound),
    };
  }

  handleErrorAddressed() {
    this.setState({
      error: null,
    });
  }

  handleMakeGuess(_guess) {
    const guess = parseInt(_guess, 10);
    const error = gameLogic.validateGuess(guess);

    if (!!error) {
      this.setState({ message: error.message });
      return;
    }

    this.setState({
      message: gameLogic.getHint(guess, this.state.theNumber),
      lastGuess: guess,
      guess,
    });
  }

  handleMessageViewed() {
    this.setState({ message: null });
  }

  handleReset(_lowerBound, _upperBound) {
    const lowerBound = parseInt(_lowerBound, 10);
    const upperBound = parseInt(_upperBound, 10);
    const error = gameLogic.validateBounds(lowerBound, upperBound);

    if (!!error) {
      this.setState({ message: error.message });
      return;
    }

    this.setState(this.getResetState(lowerBound, upperBound));
  }

  render() {
    const { guess, lastGuess, lowerBound, message, upperBound } = this.state;
    return (
      <div>
        <Notification
          message={message}
          open={!!message}
          onMessageViewed={this.handleMessageViewed}
        />
        <AppBar
          title="Guess the Number"
          iconElementLeft={<span></span>}
        />
        <Game
          guess={guess}
          lastGuess={lastGuess}
          lowerBound={lowerBound}
          upperBound={upperBound}
          onMakeGuess={this.handleMakeGuess}
        />
        <GameConfiguration
          lowerBound={lowerBound}
          upperBound={upperBound}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default GuessTheNumberContainer;
