import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';
import { Line } from 'react-chartjs-2';

const Chart = ({ data: {Confirmed, Active, Deaths, Recovered, cDate, xlabels, ylabels }}) => {
  console.log(xlabels);
    console.log(ylabels);
  const [dailyData, setDailyData] = useState({});

  useEffect (() => {
    const fetchAPI = async () => {
    const initialDailyData = await fetchData(); 

    setDailyData(initialDailyData);
    };

    fetchAPI();
  }, []);



  const lineChart = (
      <Line data={{
        labels: xlabels,
        datasets: [{
              label: 'Confirmed Cases',
              fillColor : "rgba(172,194,132,0.4)",
              strokeColor : "#ACC26D",
              borderColor : "##ACC26D",
              pointStrokeColor : "#9DB86D",
              data : ylabels
          }],
      }}
      />
  );

  return (
    <div className="container">
      <center><h1>COVID-19 Data for the United States</h1></center>
      {lineChart}
    </div>
  );
};

export default Chart;