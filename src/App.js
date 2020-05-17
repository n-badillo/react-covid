import React from 'react';

import { Cards, Charts } from './components';
import Header from './components/header';
import { fetchData } from './api';

class App extends React.Component {
  state ={
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <Cards data={data}/>
        
      </div>
    );
  }
}

export default App;