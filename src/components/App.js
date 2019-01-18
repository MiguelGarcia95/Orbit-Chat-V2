import React from 'react';
import './App.css';
import firebase from '../firebase';

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
      <section className="app">
        <p>Chat Goes here</p>
      </section>
    );
  }
}

export default App;
