import * as types from '../actions/actionTypes';


export default function(state = [], action){


	switch(action.type){
		 case types.FETCH_PROVIDERS:
		 let val = state;
		 if(state.length == 0){
			 val =[ action.payload.data.providerLists, ...state];
		 }
		 return val;

		 default:
		 return state;
	}


}
