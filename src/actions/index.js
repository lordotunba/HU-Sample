import axios from 'axios';
import * as types from './actionTypes';
const API_KEY = "AIzaSyDd7E7Hmjx5EsuG47bluL_F7wrUWg_fPtw";




export function fetchNews(){
  const request = axios.get('./newsData.json');
	return {
		type: types.FETCH_NEWS,
		payload: request
	};

}

export function getDetails(detailedNews){
console.log(detailedNews);
	return {
		type: types.SHOW_NEWSLIST,
		payload: detailedNews
	};

}

export function getSelectedPark(parkMarker){
  return{
    type:types.GET_SELECTEDPARK,
    payload:parkMarker
  }
}

function fetchWeatherImage(lat,long){
  const img = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=500&type=skyline&key=${API_KEY}`;
  const res = axios.get(img);
  return res;
}

export function fetchWeather(){
  const request = axios.get('./weatherData.json');
  
	return {
		type: types.FETCH_WEATHER,
		payload: request
	};

}

export function fetchParking(){
 const request = axios.get('./parking.json');

	return {
		type: types.FETCH_PARKING,
		payload: request
	};

}

export function fetchProviders(){
  const request = axios.get('./ProviderData.json');
  return{
    type: types.FETCH_PROVIDERS,
    payload:request
  }
}
