import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

let dataKey = 'month';

const Duration = (props) => {
  const {appointment, toggleAppointments} = props;
  const click = () => {
    if(dataKey === 'month'){
      toggleAppointments('week');
      dataKey = 'day';
    } else {
      toggleAppointments('month');
      dataKey ='month';  
    }
  };
  return (
    <BarChart width={600} height={300} data={appointment}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      onClick={click} 
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey={dataKey}/>
      <YAxis/>
      <Tooltip/>
      <Legend verticalAlign="top" height={36}/>
      <Bar dataKey="duration" fill="#8884d8" />
    </BarChart>
  );
};

export default Duration;