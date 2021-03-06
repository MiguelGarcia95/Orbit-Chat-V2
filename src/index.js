import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';

import {setUser} from './redux/actions/authActions';
import firebase from './firebase';
import store from './redux/store';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RoomNavbar from './components/RoomNavbar/RoomNavbar';
import Chatroom from './components/Chatroom/Chatroom';

class Root extends React.Component {
  state = {
    currentRoom: '',
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
      }
    })
  }

  render() {
    const {currentUser} = this.props;
    return (
      <React.Fragment>
        <Switch>
            <Route path='/app/:roomId'
              render={(props) => <Chatroom {...props} user={currentUser} />}
            />
            <Route path='/app'
              render={(props) => <App {...props} user={currentUser} />}
            />
            <Route extact path='/login' component={Login} />
            <Route extact path='/register' component={Register} />
            <Route exact path="/" render={() => (<Redirect to="/app" />)} /> 
            {/* <Route path="*" component={NoMatch} />    */}
          </Switch>
          <Route path='/app'
            render={(props) => <RoomNavbar {...props} user={currentUser} />}
          />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    currentUser:  state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  }
}

const RootWithAuth = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))

const RootWithRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootWithAuth />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (module.hot) {
//   module.hot.accept();
// }