import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


import './App.css';

class App extends Component {
  state = {
    data : [ 
      { duration: 4230, month: 'Mar' },
      { duration: 164565, month: 'Apr' },
      { duration: 158960, month: 'May' },
      { duration: 115950, month: 'Jun' } ],
    dataKey: 'month',
  }
  click = () => {
    const dataMonth = [ 
      { duration: 4230, month: 'Mar' },
      { duration: 164565, month: 'Apr' },
      { duration: 158960, month: 'May' },
      { duration: 115950, month: 'Jun' } ];
    const dataWeek =  [ 
      { duration: 69210, day: 'Mon' },
      { duration: 62220, day: 'Tue' },
      { duration: 54075, day: 'Wed' },
      { duration: 60660, day: 'Thu' },
      { duration: 52815, day: 'Fri' },
      { duration: 87995, day: 'Sat' },
      { duration: 58800, day: 'Sun' } 
    ];
    if(this.state.dataKey === 'month'){
      this.setState({
        data: dataWeek,
        dataKey: 'day'
      })
    } else {
      this.setState({
        data: dataMonth,
        dataKey: 'month'  
      })
    }
  }
  render() {
    return (
      <div className="App">
        <BarChart width={600} height={300} data={this.state.data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
          onClick={this.click} 
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey={this.state.dataKey}/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="duration" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default App;
