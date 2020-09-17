import React,{useEffect, useState} from 'react';

const  App=()=> {
  const [coronadata, setcoronadata] = useState({})

  useEffect(()=>{
    fetch('https://api.covid19india.org/data.json')
    .then(res=>res.json())
    .then(data=>{console.log(data.statewise[6]);setcoronadata(data.statewise[6])})
  },[])
  return (
    <div className="App">
      <h1 className="title">Do U wanna see How bad the corona virus situtation in U.P </h1>
        <div className="data">
          <h2>active cases - {coronadata.active}</h2>
          <h2>confirmed cases - {coronadata.confirmed}</h2>
          <h2>deaths - {coronadata.deaths}</h2>
          <h2>recovered - {coronadata.recovered }</h2>
        </div>
    </div>
  );
}

export default App;
