import React from 'react';
import Providers from './providers';


const ProviderLists = ({providers}) =>{
        const showList = providers.map((provider) => {

        return provider.map((prov,id) =>{
          return <Providers provider={prov} key={id} />
        })
      });



  return(<div>
  			  <div className="header" >
            <h1>NUANCE HeadUnit App </h1>
  			  </div>
  				<div className="wrapper">
  			 {providers[0] == undefined ? <p> loading...</p> : showList}
  				</div>
        </div>
   )
}

export default ProviderLists;
