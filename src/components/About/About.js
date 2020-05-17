import React from 'react';

const About = () => {
  return (    
    <div id="about" className="container">
      <div><h2>About This Site</h2></div>
      <div>
      This website was created as a proof of concept for CPSC 349 - Front End Development.  I plan to implement a couple features to this website in the future (maybe after the project deadline) to increase the project's functionality:
      <ul><li>Add the ability to choose a different country that is not the United States</li>
      <li>Have the ability to enable state and city data using another API</li>
      <li>Implement Choropleth maps or other forms of data visualization</li></ul>
      <li>Add a "Region" page, where you could get average stats of all countries located in one region (ie, North America would return Mexico, Canada and United States data and how they compare)</li>
      
      </div>
      </div>
  )
}


export default About;