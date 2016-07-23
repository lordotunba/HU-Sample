import React from 'react';
import Speech from 'react-speech';

const WeatherView = ({currentCondition}) =>{
const Greetings = "Hi Michael,";
  return (
    <div className="weatherWrapper">
      <section className="overlay">
      <img className="imgweather" src={currentCondition.weatherIcon} />
        <span className="header">
          <h2 className="city">{currentCondition.temperature}&deg; F</h2>
        </span>
        <span className="state">
          {currentCondition.observationStation.state}
        </span>
        <span className="weatherText">
          {currentCondition.weather}
        </span>
       <Speech text={`${Greetings} ${currentCondition.tts }`} autostart={true} />
      </section>
    </div>
  )

}

export default WeatherView;
