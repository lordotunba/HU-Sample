import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchProviders} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import ProviderLists from './providerLists';
import Providers from './providers';

class HUIndex extends Component {
	constructor(props,context){
		super(props,context);
  }

componentWillMount(){
  this.handleGetProviders();
}

handleGetProviders(){
  this.props.fetchProviders();
}

	render(){
		return(
       <ProviderLists providers={this.props.providers} />
			)
	}
}

function mapStateToProps(state,ownProps){
	console.log(ownProps,state)
	return {providers: state.services}
 }

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchProviders:fetchProviders},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(HUIndex);
