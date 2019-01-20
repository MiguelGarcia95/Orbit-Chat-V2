import React from 'react';
import './App.css';
import firebase from '../firebase';
import {Grid, Sidebar, Menu} from 'semantic-ui-react';

import SideMenulPanel from './SideMenuPanel/SideMenuPanel';

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
        <SideMenulPanel />
        <Grid.Column style={{marginLeft: 320}}>
          <React.Fragment>t</React.Fragment>
        </Grid.Column>
        <Grid.Column width={4}>
          <React.Fragment>t</React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
