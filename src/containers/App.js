import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAppointments, onRequestData } from '../actions/index';

import './App.css';

class App extends Component {
  state = {
    data : this.props.appointmentByMonth,
    dataKey: 'month',
  }

  componentDidMount() {
    this.props.onRequestData();
    this.setState({
      data: this.props.appointmentByMonth,
    })
  }

  click = () => {
    if(this.state.dataKey === 'month'){
      this.props.toggleAppointments('week')
      this.setState({
        data: this.props.appointmentByWeek,
        dataKey: 'day'
      })
    } else {
      this.props.toggleAppointments('month')
      this.setState({
        data: this.props.appointmentByMonth,
        dataKey: 'month'  
      })
    }
  }
  render() {
    if(!this.props.fetching) {
      console.log(this.props)
      return (
        <div className="App">
          <BarChart width={600} height={300} data={this.props.appointment}
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
    } else {
      return <p>loading...</p>
    }
  }
}

const mapStateToProps = ({ data }) => {
  return {
    fetching: data.fetching,
    data: data.data,
    error: data.error,
    appointment: data.appointment,
    appointmentByMonth: data.appointmentByMonth,
    appointmentByWeek: data.appointmentByWeek
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleAppointments, onRequestData }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
