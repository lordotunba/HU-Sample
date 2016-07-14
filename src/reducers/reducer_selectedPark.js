import * as types from '../actions/actionTypes';



export default function(state = {selectedPark:null}, action){

	switch(action.type){
    case types.GET_SELECTEDPARK:
    return {...state,selectedPark:action.payload}

		default:
		return state;
	}


}
