import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchParking,getSelectedPark} from '../actions/index';
import {bindActionCreators} from 'redux';
import Map from './map';

class Parking extends Component {
	constructor(props,context){
		super(props);
	}

handleGetParking(){
  this.props.fetchParking();
}



componentWillMount(){
  this.handleGetParking();
}

showSelectedMarker(marker){
	console.log('marker here',marker);
  this.props.getSelectedPark(marker)

}
// selectedPark(marker){
//   this.props.selectedPark
// }



	render(){
    console.log(this.props.selectedPark)
		return(
			<div>
			  <div className="header">
          <h1> Parking Location </h1>
			  </div>
				<div className="section-map">
          <Map parkingLocations={this.props.parking}
						   selectedPark={this.showSelectedMarker.bind(this)}/>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state,ownProps){
	return{
		parking:state.parking,
		selectedPark:state.selectedPark
	};

 }

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchParking:fetchParking,getSelectedPark:getSelectedPark},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Parking);
