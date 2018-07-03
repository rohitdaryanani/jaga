import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Sector = (props) => {
  const {data} = props;


  return (
    <div className="col-xs-12 col-md-6">
      <ScatterChart width={600} height={300} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        <CartesianGrid />
        <YAxis dataKey={'count'} type="number" name='count'/>
        <XAxis dataKey={'sector'} type="category" name='sector'/>
        <Scatter name="Count Per Sector" data={data} fill='#8884d8'/>
        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
        <Legend verticalAlign="top" height={36}/>
      </ScatterChart>
    </div>
  );
};

export default Sector;