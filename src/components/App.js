import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';

class App extends React.Component {
  /* domain.com/ = redirect to root or login */
  render() {
    return (
      <section className="App">
        <p>Chat Goes here</p>
      </section>
    );
  }
}

export default App;
