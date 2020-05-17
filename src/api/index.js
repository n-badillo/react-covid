import axios from 'axios';

const url = 'https://api.covid19api.com/total/country/united-states';

export const fetchData = async () => {
  try{
    //const { data: { province, city, cases } } = await axios.get(url);
    const response = await axios.get(url);
    // return { province, city, cases };

    
    //const data = await response.json();
    console.log(response.data);
    const indivData = response.data;

    const Confirmed = indivData[indivData.length - 1].Confirmed;
    const Active = indivData[indivData.length - 1].Active;
    const Deaths = indivData[indivData.length - 1].Deaths;
    const Recovered = indivData[indivData.length - 1].Recovered;

    return { Confirmed, Active, Deaths, Recovered };
  } catch ( error ){

  } 
}

export const fetchDailyData = async() => {
  try{
    const response = await axios.get(url);

    console.log(response.data);
    const indivData = response.data;

    const xaxis = [];
    const yaxis = [];

    for(var counter = 0; counter < indivData.length; counter++){
      xaxis.push(indivData[counter].Confirmed);
      yaxis.push(indivData[counter].Date);
    }

    return { xaxis, yaxis };
  }  catch (error){}
}