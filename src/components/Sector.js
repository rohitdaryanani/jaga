import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Sector = (props) => {
  const {data, dataKeyX, dataKeyY} = props;


  return (
    <ScatterChart width={800} height={800} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <CartesianGrid />
      <YAxis dataKey={'count'} type="number" name='count'/>
      <XAxis dataKey={'sector'} type="string" name='sector' unit='sector'/>
      <Scatter data={data} fill='#8884d8'/>
      <Tooltip cursor={{strokeDasharray: '3 3'}}/>
    </ScatterChart>
  );
};

export default Sector;