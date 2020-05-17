import axios from 'axios';
import { invalid } from 'moment';

const url = 'https://api.covid19api.com/total/country/united-states';

export const fetchData = async () => {
  try{
    const response = await axios.get(url);

    console.log(response.data);
    const indivData = response.data;

    const Confirmed = indivData[indivData.length - 1].Confirmed;
    const Active = indivData[indivData.length - 1].Active;
    const Deaths = indivData[indivData.length - 1].Deaths;
    const Recovered = indivData[indivData.length - 1].Recovered;
    const cDate = indivData[indivData.length - 1].Date;

    const xlabels = [];
  const ylabels = [];

  
  
  for(var i = 0; i < 116; i++){
    xlabels.push(indivData[i].Date);
    ylabels.push(indivData[i].Confirmed);
  }

  console.log(xlabels);
  console.log(ylabels);

    return { Confirmed, Active, Deaths, Recovered, cDate , xlabels, ylabels };
  } catch ( error ){

  } 
};

// export const fetchDailyData = async() => {
//   try{
//     const response = await axios.get(url);

//     console.log(response.data);
//     const indivData = response.data;

//     console.log('indivdata');
//     console.log(indivData);
//     return {indivData};
//   }  catch (error){
//     return error;
//   }
// };