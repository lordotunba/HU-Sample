import React from 'react';




const NewsDetail = (props) => {
    console.log(props);
   const showDetails = props.detailedNews.image.map((news,id)=>{
     return (<div className="card" key={id}>
                 <img className="card-img-top col-sm-12 col-md-12 img-style" src={news.mediumURL} alt="Card image cap"/>
                 <div className="card-block card-style">
                   <h4 class="card-title">{news.headline}</h4>
                   <p class="card-text">{news.description}</p>
                   <a href="#" class="btn btn-primary">Launch News</a>
                 </div>
              </div>
           )
   });
    return (
           <div>
            <div className="col-md-12">
              <div className="header">
                <h1> Details </h1>
              </div>
              {showDetails}
              </div>
           </div>
        );

}



export default NewsDetail;
