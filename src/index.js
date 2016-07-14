import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {Router,browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes'
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,window.devToolsExtension ? window.devToolsExtension() : f => f)}>
   <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));


//The react-router plugin is essentially a component which is used for handling
// client based routes within your application. This poweerful cpomponent comes with features such as:

// 1: Basic Routing e.g /accountPage
// 2: Nesting of routes e.g /accountPage/edit
// 3: 404 error page support e.g /NotFound
// 4: IndexRoutes - rendering other components within a component using {props.children}
// 5: adding an active className to an active link
// 6: Adding Route Params e.g/accountPage/edit/joe
