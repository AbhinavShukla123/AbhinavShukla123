import React,{ useEffect, useState } from 'react'
import Newsitems from './newsitems.jsx';

const Newsboard = ({category}) => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=4be6f866d57440e48359dc7c50a58333`;
    fetch(url).then(response=> response.json()).then(data=>setData(data.articles));
  },[category]);
  return (
    <div>
      <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
      {data.map((data,index)=>{
        return <Newsitems key={index} title={data.title} description={data.description} src={data.urlToImage} url={data.url}/>
      })}
    </div>
  );
}

export default Newsboard
