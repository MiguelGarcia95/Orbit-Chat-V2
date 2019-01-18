import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
          {/* <Route extact path='/login' component={} />
          <Route extact path='/register' component={} />
          <Route extact path='/app' component={} />
          <Route path='/app/:roomId' component={} />
          <Route path='/app/:roomId/:channelId' component={} /> */}
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
