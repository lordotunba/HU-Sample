import * as types from '../actions/actionTypes';


export default function(state = {all:[],detailed:null}, action){

	switch(action.type){
		case types.FETCH_NEWS:
		//state.concat(action.payload.data.results.data.articleList.article);
		return {...state, all: action.payload.data.results.data.articleList.article};

		case types.SHOW_NEWSLIST:
		return {...state, detailed: action.payload.imageList};

		default:
		return state;
	}


}
