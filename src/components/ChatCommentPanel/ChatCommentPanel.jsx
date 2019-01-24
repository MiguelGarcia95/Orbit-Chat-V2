import React from 'react';
import {connect} from 'react-redux';

class ChatCommentPanel extends React.Component {
  state = {
    currentChannel: null
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      currentChannel: nextProps.currentChannel
    });
    if (nextProps.currentChannel === null) {
      this.setState({
        currentChannel: nextProps.channels[nextProps.channels.length - 1]
      })
    }
  }



  render() {
    console.log(this.state.currentChannel)
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentChannel: state.channel.currentChannel,
    channels: state.channel.channels
  }
}


export default connect(mapStateToProps)(ChatCommentPanel);