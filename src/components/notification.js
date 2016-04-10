import Snackbar from 'material-ui/lib/snackbar';
import React, { Component, PropTypes } from 'react';

class NotificationComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      open: false,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { message, open } = nextProps;
    this.setState({
      message,
      open,
    });
  }

  handleClose() {
    this.setState({
      message: '',
      open: false,
    });
    this.props.onMessageViewed();
  }

  render() {
    const { message, open } = this.state;

    if (!message) {
      return (<span></span>);
    }

    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={4000}
        onRequestClose={this.handleClose}
      />
    );
  }
}

NotificationComponent.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool,
  onMessageViewed: PropTypes.func.isRequired,
};

export default NotificationComponent;
