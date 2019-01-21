import React from 'react';
import firebase from '../../firebase';
import {Grid, Sidebar, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';

// import {setUser} from '../redux/actions/authActions';
import {getChatroom} from '../../redux/actions/chatroomActions';
import SideMenulPanel from '../SideMenuPanel/SideMenuPanel';

class Chatroom extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/login');
      }
    })
    this.props.getChatroom(this.props.match.params.roomId);
  }

  render() {
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
        <SideMenulPanel />
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

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: id => dispatch(getChatroom(id))
  }
}

export default connect(null, mapDispatchToProps)(Chatroom);
