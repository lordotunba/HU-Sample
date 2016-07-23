import * as types from '../actions/actionTypes';


export default function(state = {currentCondition:null}, action){

	switch(action.type){

		case types.FETCH_WEATHER:
		return {...state, currentCondition: action.payload.data.results.data.conditions};

		default:
		return state;
	}


}
