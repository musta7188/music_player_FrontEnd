import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import { BrowserRouter as Router, Route } from "react-router-dom";

///create reducer to store the state (redux)
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__())
  


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>    
      <Router>
        <App />
      </Router>
      
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
