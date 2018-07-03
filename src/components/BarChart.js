import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// const Duration = props => {

class Duration extends React.Component {
  state = {
    dataKey: 'month'
  };

  changeDataKey = key => {
    const { toggle } = this.props;
    if (key === 'month') {
      toggle('week');
      this.setState({ dataKey: 'day' });
    } else {
      toggle('month');
      this.setState({ dataKey: 'month' });
    }
  };

  render() {
    const { data, barDataKey, label } = this.props;
    const { dataKey } = this.state;

    return (
      <div className="col-md-6">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          onClick={() => this.changeDataKey(dataKey)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey={barDataKey} name={label} fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default Duration;
