import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';

class GameConfigurationComponent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      lowerBound: props.lowerBound,
      upperBound: props.upperBound,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleReset() {
    const { lowerBound, upperBound } = this.state;
    this.props.onReset(lowerBound, upperBound);
  }

  render() {
    const { lowerBound, upperBound } = this.state;

    return (
      <div className="section">
        <Card>
          <CardTitle title="Game Config" subtitle="Updated the rules and press RESET." />
          <CardText>
            <TextField
              type="number"
              floatingLabelText="Lower Bound"
              name="lowerBound"
              value={lowerBound}
              onChange={this.handleChange}
            />
            <TextField
              type="number"
              floatingLabelText="Upper Bound"
              name="upperBound"
              value={upperBound}
              onChange={this.handleChange}
            />
          </CardText>
          <CardActions>
            <RaisedButton label="reset" primary onClick={this.handleReset} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

GameConfigurationComponent.propTypes = {
  lowerBound: PropTypes.number.isRequired,
  upperBound: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default GameConfigurationComponent;
