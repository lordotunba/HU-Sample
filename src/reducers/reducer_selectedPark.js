import * as types from '../actions/actionTypes';


export default function(state = {selectedPark:null}, action){

	console.log('action recieved', action);

	switch(action.type){
    case types.GET_SELECTEDPARK:
    console.log(action.payload);

  return {...state,selectedPark:action.payload}

		default:
		return state;
	}


}
