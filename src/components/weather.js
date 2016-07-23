import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import WeatherView from './weatherView';



class Weather extends Component{
  constructor(props){
    super(props)
  }

componentWillMount(){
  this.handleGetWeather();
}

handleGetWeather(){
  this.props.fetchWeather();
}
  render(){
    return(
      <div>
        {this.props.weather.currentCondition == null ? '' :
        <WeatherView currentCondition={this.props.weather.currentCondition} />}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather:fetchWeather},dispatch);
}

function mapStateToProps(state){
  return { weather:state.weather };

}

export default connect(mapStateToProps,mapDispatchToProps)(Weather);
