import React,{ Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";





const ParkMap = (props) => {

    return (
           <section className="map-widget" style={{height: "100%"}}>
             <GoogleMapLoader
               containerElement={<div style={{ height: "100%"}} />}
               googleMapElement={
                   <GoogleMap
                     defaultZoom={17}
                     defaultCenter={{lat:47.60621, lng: -122.33207}}>
                     {props.parkingLocations.map((marker,id) => {
                             return (
                                   <Marker {...marker}
                                     key={id}
                                     visible ={true}
                                    onClick={() => props.selectedPark(marker.currentPark)}/>
                             );

                       })}
                    </GoogleMap>
                  }
              />
             </section>
            );

}



export default ParkMap;
