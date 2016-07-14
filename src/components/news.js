import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchNews} from '../actions/index';
import {bindActionCreators} from 'redux';

class News extends Component {
	constructor(props,context){
		super(props);
	}

handleGetNews(){
  this.props.fetchNews();
}



componentWillMount(){
  this.handleGetNews();
}



	render(){
		return(
			<div>
			  <div className="header">
          <h1> Top News </h1>
			  </div>
				<div className="wrapper">

				</div>
			</div>
			)
	}
}

function mapStateToProps(state,ownProps){
	return{
		news:state.news
	};

 }

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchNews:fetchNews},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(News);
