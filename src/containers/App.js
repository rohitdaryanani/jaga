import React, { Component } from 'react';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAppointments, onRequestData } from '../actions/index';

import Duration from '../components/Duration';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    if(!this.props.fetching) {
      const {appointment, toggleAppointments} = this.props;
      return (
        <div className="App">
          <Duration appointment={appointment} toggleAppointments={toggleAppointments}/>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

const mapStateToProps = ({ data }) => {
  return {
    fetching: data.fetching,
    data: data.data,
    error: data.error,
    appointment: data.appointment,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleAppointments, onRequestData }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
