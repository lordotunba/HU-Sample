import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HUIndex from './components/hu_index';
import News from './components/news';
import Parking from './components/parking';


export default(
	<div>
	  <Route path='/' component={App}>
	   <IndexRoute component={HUIndex} />
	    <Route path='/news' component={News}>

				{/*<Route path='details/:id' component={NewsDetail} />*/}
			</Route>
			<Route path='/parking' component={Parking}/>
	  </Route>
     {/*<Route path='*' component={NotFound}/>*/}
	</div>

	);
