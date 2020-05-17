import React from 'react';

import { Cards, Charts, About } from './components';
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
        <div style={{margin: "50px 0px 50px 0px"}}>
        <Charts data={data} />
        </div>
        <div style={{margin: "50px 0px 50px 0px"}}>
        <Cards data={data}/>
        </div>
        <div style={{margin: "50px 0px 50px 0px"}}>
        <About />
        </div>
      </div>
    );
  }
}

export default App;