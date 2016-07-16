import React from 'react';
import {Link} from 'react-router';
import NewsDetail from './newsDetail';

const NewsCategory = (props)=>{
  console.log(props);
  const showCategory = props.categories.map((category) =>{
    return (
      <div className="card card-block" key={category.id}>
        <h4 className="card-title"></h4>
        <p className="card-text">{category.headline}</p>
        <button onClick={() =>{props.selectedNews(category)}} className="btn btn-primary">Read News</button>
      </div>
    )
  });
  return (
  <div>
     <div className="col-md-6 col-sm-12 row">
       <div className="header">
          <h1> Top News </h1>
       </div>
      {showCategory}
     </div>
    <div className="col-md-6 col-sm-12 row pull-right imgMap">{props.detailedNews == null ? '' : <NewsDetail detailedNews={props.detailedNews}/>}</div>
   </div>
  )
}

export default NewsCategory;
