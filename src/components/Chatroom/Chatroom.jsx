import React from 'react';
import firebase from '../../firebase';
import {Grid, Sidebar, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {createNewCategory, getCategories} from '../../redux/actions/channelActions';
import {getChatroom} from '../../redux/actions/chatroomActions';
import SideMenulPanel from '../SideMenuPanel/SideMenuPanel';

class Chatroom extends React.Component {
  state = {
    chatroom: null,
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/login');
      }
    })
    this.props.getChatroom(this.props.match.params.roomId);
    this.props.getCategories(this.props.match.params.roomId);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user, chatroom: nextProps.chatroom});
  }

  render() {
    const {chatroom, user} = this.state;
    const {createNewCategory} = this.props;
    
    return (
      <Grid columns='equal'>
        <Sidebar 
          width='very thin'
          icon='labeled'
          as={Menu}
          inverted
          vertical
          visible
        />
        <SideMenulPanel 
          chatroom={chatroom}
          user={user}
          createNewCategory={createNewCategory}
          isHome={false}
        />
        <Grid.Column style={{marginLeft: 320}}>
          <React.Fragment>t</React.Fragment>
        </Grid.Column>
        <Grid.Column width={2}>
          <React.Fragment>t</React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    chatroom: state.chat.currentChatroom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: id => dispatch(getChatroom(id)),
    createNewCategory: category => dispatch(createNewCategory(category)),
    getCategories: id => dispatch(getCategories(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
