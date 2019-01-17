import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/* 

Routes
---------
domain.com/ = redirect to root or login
domain.com/app = root
          /login
          /register
          /app/room/{roomId} = room channels and categories
          /app/room/{roomId}/{channelId} = channel messages 
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
