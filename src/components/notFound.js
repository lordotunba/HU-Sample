import React,{Component} from 'react';

import {Link} from 'react-router';

const NotFound = (props) =>{
	return (<div  className="wrapper">
	           <h2> Sorry, the page you are looking for does not exist. </h2>
					   <span> <Link to="/" className="btn btn-primary"> Go Home </Link> </span>
          </div>
		 )
}

export default NotFound;
