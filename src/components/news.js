import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchNews,getDetails} from '../actions/index';
import {bindActionCreators} from 'redux';
import NewsCategory from './newsCategory';


class News extends Component {
	constructor(props,context){
		super(props);
	}

handleGetNews(){
  this.props.fetchNews();
}

handleGetNewsDetail(news){
	this.props.getDetails(news);
}



componentWillMount(){
  this.handleGetNews();
}



	render(){

		return(
			<div>
				<div className="wrapper">
					<NewsCategory categories={this.props.news}
						           selectedNews={this.handleGetNewsDetail.bind(this)}
											 detailedNews={this.props.details}/>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state,ownProps){
	return{
		news:state.news.all,
		details:state.news.detailed
	};

 }

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchNews:fetchNews,getDetails:getDetails},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(News);
