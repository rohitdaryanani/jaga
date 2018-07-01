import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../actions/index';
import {slots} from '../data.json'


import './App.css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const transformedData = slots.map(i => 
    ({
        ...i, 
        month: months[new Date(i.start_date_time).getMonth()],
        day: days[new Date(i.start_date_time).getDay()],
        date: `${new Date(i.start_date_time).getFullYear()}-${new Date(i.start_date_time).getMonth() + 1}-${new Date(i.start_date_time).getDate()}`,
        sector: i.postal.trim().slice(0,2),
    }))

class App extends Component {
  state = {
    data : [],
    dataKey: 'month',
  }

  componentDidMount() {
    const appointmentByMonth = transformedData
    .reduce((s, n) => {
        const {duration, start_date_time } = n;
        const d = new Date(start_date_time)
        const month = months[d.getMonth()];
        const item = s.find((i) => i.month === month);
        if(!item) {
            const data = {
                duration,
                month,
                count: 1
            }
            s.push(data)
        } else {
            item.duration += duration
            item.count++
        }
        return s;
    }, months.map(month => ({month, count:0, duration:0})))
    .sort((a,b) => months.indexOf(a.month) - months.indexOf(b.month) );

    const appointmentByWeek = transformedData
    .reduce((s, n) => {
        const {duration, start_date_time } = n;
        const d = new Date(start_date_time)
        const day = days[d.getDay()];
        const item = s.find((i) => i.day === day);
        if(!item) {
            const data = {
                duration,
                day,
            }
            s.push(data)
        } else {
            item.duration += duration
        }
        return s;
    }, []).sort((a,b) => days.indexOf(a.day) - days.indexOf(b.day) )

    this.setState({
      data: appointmentByMonth,
      appointmentByMonth,
      appointmentByWeek
    })
  }

  click = () => {
    const {appointmentByMonth, appointmentByWeek} = this.state;
    if(this.state.dataKey === 'month'){
      this.setState({
        data: appointmentByWeek,
        dataKey: 'day'
      })
    } else {
      this.setState({
        data: appointmentByMonth,
        dataKey: 'month'  
      })
    }
  }
  render() {
    console.log(this.props.data);
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
          <Legend verticalAlign="top" height={36}/>
          <Bar dataKey="duration" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
