import React from 'react';
import './App.css';
import firebase from '../firebase';
import {Grid, Sidebar, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';

import HomeMenuPanel from './HomeMenuPanel/HomeMenuPanel';

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/login');
      }
    })
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({user: nextProps.user});
  // }

  render() {
    const {user} = this.props;
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
        <HomeMenuPanel user={user} />
        <Grid.Column style={{marginLeft: 320}}>
          <React.Fragment></React.Fragment>
        </Grid.Column>
        <Grid.Column width={2}>
          <React.Fragment></React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setUser: user => dispatch(setUser(user))
//   }
// }

export default connect()(App);
