import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import { pick } from 'lodash';

class GameComponent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleMakeGuess = this.handleMakeGuess.bind(this);
    this.state = this.pickStateProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.pickStateProps(nextProps));
  }

  pickStateProps(props) {
    return pick(props, ['guess', 'lastGuess', 'lowerBound', 'upperBound']);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleMakeGuess() {
    this.props.onMakeGuess(this.state.guess);
  }

  render() {
    const { guess, lastGuess, lowerBound, upperBound } = this.state;
    const subTitle = `Guess the number between ${lowerBound} and ${upperBound}
      and press MAKE GUESS`;

    return (
      <div className="section">
        <Card>
          <CardTitle title="Play the Game!" subtitle={subTitle} />
          <CardText>
            <div className="last-guess">last guess: {lastGuess}</div>
            <TextField
              type="number"
              floatingLabelText="Guess"
              name="guess"
              value={guess}
              onChange={this.handleChange}
            />
          </CardText>
          <CardActions>
            <RaisedButton label="make guess" primary onClick={this.handleMakeGuess} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

GameComponent.propTypes = {
  hint: PropTypes.string,
  guess: PropTypes.number,
  lastGuess: PropTypes.number,
  lowerBound: PropTypes.number.isRequired,
  upperBound: PropTypes.number.isRequired,
  onMakeGuess: PropTypes.func.isRequired,
};

export default GameComponent;
