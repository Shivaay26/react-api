import React,{useEffect, useState} from 'react';

const  App=()=> {

  const [datafetched, setdatafetched] = useState([])
  const [state, setstate] = useState("Total");
  const [statedata, setstatedata] = useState({})
  let inputstate="Total";

  useEffect(()=>{
    fetch('https://api.covid19india.org/data.json')
    .then(res=>res.json())
    .then(data=>{setdatafetched(data.statewise);})
  },[statedata])
 
  const changeHandler=(e)=>{inputstate=e.target.value;}

  const submitHandler=(e)=>{
    e.preventDefault();
    setstatedata(datafetched.filter(dataperstate=>{
      return dataperstate.state===inputstate
    }))
  }
  
  return (
    <div className="App">
      <h1 className="title">Do U wanna see How bad the corona virus situtation in your state is</h1>
        <div className="data">
          <form onSubmit={submitHandler}>
           Enter your state :- 
            <input type="text" onChange={changeHandler}/>
          </form>
          
          {statedata[0] && 
          <>
          <h1>state - {statedata[0].state}</h1>
          <h2>active cases - {statedata[0].active}</h2>
          <h2>Total cases - {statedata[0].confirmed}</h2>
          <h2>Deaths - {statedata[0].deaths}</h2>
          <h2>recovered  - {statedata[0].recovered}</h2>

          {console.log(statedata[0])}
          </>}        
 
        </div>
    </div>
  );
}

export default App;

// ;setcoronadata(data.statewise[6])