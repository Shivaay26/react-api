import React,{useEffect, useState} from 'react';

const  App=()=> {

  const [datafetched, setdatafetched] = useState([])
  const [state, setstate] = useState("Total");
  const [statedata, setstatedata] = useState({})
  let inputstate="";

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
         <div className="data">
          
          {/*         */}
          {datafetched[0] && <div>
            <h2>active coronavirus cases in india:-</h2>
            <h2 className="grey">{datafetched[0].active}</h2>
          <h2>confirmed cases - {datafetched[0].confirmed}</h2>
          <h2>Deaths - {datafetched[0].deaths}</h2>
          <h2>recovered  - {datafetched[0].recovered}</h2>

            </div>}

        </div>

          <form onSubmit={submitHandler}>
           Enter your state  for state specific data:- <input type="text" onChange={changeHandler}/>
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
  );
}

export default App;

// ;setcoronadata(data.statewise[6])