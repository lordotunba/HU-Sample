import { combineReducers } from 'redux';
import ProvidersReducer from './reducer_provider';
import NewsReducer from './reducer_news';
import ParkReducer from './reducer_parking';
import SelectedParkReducer from './reducer_selectedPark';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  news: NewsReducer,
  services: ProvidersReducer,
  parking: ParkReducer,
  selectedPark: SelectedParkReducer,
  weather: WeatherReducer

});

export default rootReducer;
