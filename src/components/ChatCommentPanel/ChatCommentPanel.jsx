import React from 'react';
import {connect} from 'react-redux';
// import {Menu, Grid, Container, Header} from 'semantic-ui-react';
import ChatPanelHeader from './ChatPanelHeader';
import MessageForm from './MessageForm';

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
    const {currentChannel} = this.state;
    return (
      <React.Fragment>
        {currentChannel && <ChatPanelHeader currentChannel={currentChannel} />}
        <MessageForm  />
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