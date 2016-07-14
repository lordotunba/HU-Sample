import * as types from '../actions/actionTypes';


export default function(state = [], action){


	switch(action.type){
		 case types.FETCH_PROVIDERS:
		 return [action.payload.data.providerLists, ...state];

		 default:
		 return state;
	}


}
