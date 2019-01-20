import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';

import store from './redux/store';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RoomNavbar from './components/RoomNavbar/RoomNavbar';

class Root extends React.Component {
  state = {
    currentRoom: '',
    user: this.props.currentUser
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Switch>
            {/* 
            <Route path='/app/:roomId' component={} />
            <Route path='/app/:roomId/:channelId' component={} /> 
          */}
            <Route extact path='/app' component={App} />
            <Route extact path='/login' component={Login} />
            <Route extact path='/register' component={Register} />
            <Route exact path="/" render={() => (<Redirect to="/app" />)} /> 
            {/* <Route path="*" component={NoMatch} />    */}
          </Switch>
          {/* <Route path='/app' component={RoomNavbar} /> */}
          <Route path='/app'
            render={(props) => <RoomNavbar {...props} user={this.state.user} />}
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

const RootWithAuth = withRouter(connect(mapStateToProps)(Root))

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