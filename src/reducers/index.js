import { combineReducers } from 'redux';
import ProvidersReducer from './reducer_provider';
import NewsReducer from './reducer_news';
import ParkReducer from './reducer_parking';
import selectedParkReducer from './reducer_selectedPark';

const rootReducer = combineReducers({
  news: NewsReducer,
  services: ProvidersReducer,
  parking: ParkReducer,
  selectedPark: selectedParkReducer
  
});

export default rootReducer;
