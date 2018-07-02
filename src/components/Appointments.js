import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

let dataKey = 'month';

const Appointments = (props) => {
  const {data, toggle, barDataKey} = props;
  const click = () => {
    if(dataKey === 'month'){
      toggle('week');
      dataKey = 'day';
    } else {
      toggle('month');
      dataKey ='month';  
    }
  };
  return (
    <BarChart width={600} height={300} data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      onClick={click} 
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey={dataKey}/>
      <YAxis/>
      <Tooltip/>
      <Legend verticalAlign="top" height={36}/>
      <Bar dataKey={barDataKey} fill="#8884d8" />
    </BarChart>
  );
};

export default Appointments;