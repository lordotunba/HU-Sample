import * as types from '../actions/actionTypes';


export default function(state = [], action){

	console.log('action recieved', action);

	switch(action.type){
		case types.FETCH_PARKING:
		const markers = action.payload.data.data.parkingResponse.parkingLocations.map((latLng,index) => {
                       const eachMarker = {
                            position:{
                              lat:parseFloat(latLng.location.geoPosition.latitude),
                              lng:parseFloat(latLng.location.geoPosition.longitude)
                           },
                           key:index,
                           currentPark:latLng,
                           defaultAnimation:2
                        };
          return eachMarker;
      });
			
    return state.concat(markers);

		default:
		return state;
	}


}
