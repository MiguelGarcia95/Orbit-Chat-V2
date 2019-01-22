import React from 'react';
import './App.css';
import firebase from '../firebase';
import {Grid, Sidebar, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';

import HomeMenuPanel from './HomeMenuPanel/HomeMenuPanel';

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/login');
      }
    })
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
        <HomeMenuPanel isHome={true} user={this.props.user} />
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

// const mapDispatchToProps = dispatch => {
//   return {
//     setUser: user => dispatch(setUser(user))
//   }
// }

export default connect()(App);
