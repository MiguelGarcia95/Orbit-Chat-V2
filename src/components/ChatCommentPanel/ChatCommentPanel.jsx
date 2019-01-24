import React from 'react';
import {connect} from 'react-redux';
import {Menu, Grid, Container, Header} from 'semantic-ui-react';

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
        {currentChannel && (
          <Header as='h4' className='Chat__header' style={{height: '59px'}} textAlign='left' block={true} color='black'>
            <p>{currentChannel.channel.name}: <small>{currentChannel.channel.description}</small></p>
          </Header>
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