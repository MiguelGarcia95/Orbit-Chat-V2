import React from 'react';
import firebase from '../../firebase';
import {Grid, Sidebar, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {createNewCategory, getCategories, createNewChannel, getChannels, getChannelComments} from '../../redux/actions/channelActions';
import {getChatroom} from '../../redux/actions/chatroomActions';
import ChatMenulPanel from '../ChatMenuPanel/ChatMenuPanel';
import ChatCommentPanel from '../ChatCommentPanel/ChatCommentPanel';

class Chatroom extends React.Component {
  state = {
    chatroom: null,
    user: null,
    categories: [],
    channels: [],
    currentRoomId: ''
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/login');
      }
    })
    this.setState({currentRoomId: this.props.match.params.roomId})
    this.props.getChatroom(this.props.match.params.roomId);
    this.props.getCategories(this.props.match.params.roomId);
    this.props.getChannels(this.props.match.params.roomId);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user, 
      chatroom: nextProps.chatroom, 
      categories: nextProps.categories,
      channels: nextProps.channels
    });

    // console.log('from incoming props, ', this.state.currentRoomId);
    if (nextProps.channels.length > 0 && this.state.channels.length > 0) {
      // console.log('incoming stuff, ', nextProps.channels);
      // console.log('state stuff, ', this.state.channels);

      // this.props.getChannelComments(nextProps.channels[0].id)
      // nextProps.channels[0].id

      // console.log('incoming stuff, ', nextProps.channels[0].id);
      // console.log('state stuff, ', this.state.channels[0].id);
    }

    if (nextProps.match.params.roomId !== this.state.currentRoomId) {
      this.props.getChatroom(nextProps.match.params.roomId);
      this.props.getCategories(nextProps.match.params.roomId);
      this.props.getChannels(nextProps.match.params.roomId);
      this.setState({currentRoomId: nextProps.match.params.roomId, channels: nextProps.channels})
    }
  }

  render() {
    const {chatroom, user, categories, channels} = this.state;
    const {createNewCategory, createNewChannel} = this.props;
    return (
      <Grid columns='equal' className='app'>
        <Sidebar 
          width='very thin'
          icon='labeled'
          as={Menu}
          inverted
          vertical
          visible
        />

        <ChatMenulPanel 
          chatroom={chatroom}
          user={user}
          createNewCategory={createNewCategory}
          createNewChannel={createNewChannel}
          categories={categories}
          channels={channels}
        />

        <Grid.Column style={{marginLeft: 320, padding: '0px'}} >
          <React.Fragment>
            <ChatCommentPanel  channels={channels} user={user} chatroom={chatroom} getChannelComments={this.props.getChannelComments} />
          </React.Fragment>
        </Grid.Column>
        <Grid.Column width={2}>
          <React.Fragment></React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    chatroom: state.chat.currentChatroom,
    categories: state.channel.categories,
    channels: state.channel.channels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: id => dispatch(getChatroom(id)),
    createNewCategory: category => dispatch(createNewCategory(category)),
    getCategories: id => dispatch(getCategories(id)),
    createNewChannel: channel => dispatch(createNewChannel(channel)),
    getChannels: id => dispatch(getChannels(id)),
    getChannelComments: channelId => dispatch(getChannelComments(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
