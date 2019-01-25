import React from 'react';
import {connect} from 'react-redux';
// import {Menu, Grid, Container, Header} from 'semantic-ui-react';
import ChatPanelHeader from './ChatPanelHeader';
import MessageForm from './MessageForm';
import Messages from './Messages';

class ChatCommentPanel extends React.Component {
  state = {
    currentChannel: null,
    user: null,
    chatroom: null
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      currentChannel: nextProps.currentChannel,
      user: nextProps.user,
      chatroom: nextProps.chatroom
    });
    if (nextProps.currentChannel === null) {
      this.setState({
        currentChannel: nextProps.channels[nextProps.channels.length - 1]
      })
    }
  }

  render() {
    const {currentChannel, user, chatroom} = this.state;
    return (
      <React.Fragment>
        {currentChannel && <ChatPanelHeader currentChannel={currentChannel} />}

        {currentChannel && <Messages currentChannel={currentChannel} /> }

        {currentChannel && user && chatroom && (
          <MessageForm currentChannel={currentChannel} user={user} chatroom={chatroom}  />
        )}

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