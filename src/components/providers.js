import React from 'react';
import {Link} from 'react-router';


 const Providers = (props) =>{
  return(
   <Link to={`/${props.provider.providerName}`} className="target">
      <div className="provider">
        <li className={`fa ${props.provider.font}`}></li>
        <h2 className="providerName">{props.provider.providerName} </h2>
      </div>
   </Link>
  )
}
export default Providers;
