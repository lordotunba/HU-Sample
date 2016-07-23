import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HUIndex from './components/hu_index';
import News from './components/news';
import Parking from './components/parking';
import Weather from './components/weather';
import NotFound from './components/notFound';


export default(
	<div>
	  <Route path='/' component={App}>
	   <IndexRoute component={HUIndex} />
	    <Route path='/news' component={News}/>
			<Route path='/parking' component={Parking}/>
			<Route path='/weather' component={Weather}/>
			{/*<Route path='/news/:id' component={NewsDetail} />*/}
	  </Route>
     <Route path='*' component={NotFound}/>
	</div>

	);
