import React from 'react';
import CountUp from 'react-countup';

const Cards = ({ data: {Confirmed, Active, Deaths, Recovered, cDate, xlabels, ylabels } }) => {
  if (!Recovered){
    
    return '';  
  } 
  return (

    
    <div className="container">
      <div className="row">
        <div className ="col">
        <div className="card bg-success text-white">
            <img src={ require('../../images/fadingheart.png') } alt={''} style={{ height: "200px"}}/>
            <div className="card-img-overlay"><br/>
            <center><h3>Total Recovered</h3>
            <h3>
              <CountUp 
              start = {0}
              end = {Recovered}
              duration = {1.5}
              separator = ","
              /></h3>
              <small>Data retrieved on {cDate}</small></center>
            </div>
          </div> 
        </div>
        <div className ="col">
        <div className="card bg-dark text-white">
            <img src={ require('../../images/fadingheart.png') } alt={''} style={{ height: "200px"}}/>
            <div className="card-img-overlay"><br/>
            <center><h3>Total Confirmed Cases</h3>
            <h3>
              <CountUp 
              start = {0}
              end = {Confirmed}
              duration = {2.0}
              separator = ","
              /></h3>
              <small>Data retrieved on {cDate}</small></center>
            </div>
          </div> 
        </div>
        <div className ="col">
        <div className="card bg-danger text-white">
            <img src={ require('../../images/fadingheart.png') } alt={''} style={{ height: "200px"}}/>
            <div className="card-img-overlay"><br/>
            <center><h3>Total Deaths</h3>
            <h3>
              <CountUp 
              start = {0}
              end = {Deaths}
              duration = {2.5}
              separator = ","
              /></h3>
              <small>Data retrieved on {cDate}</small></center>
            </div>
          </div> 
        </div>
      </div>
      </div>
  )
}


export default Cards;