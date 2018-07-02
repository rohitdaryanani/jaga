import React, { Component } from 'react';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAppointments, toggleUniquePatients ,onRequestData } from '../actions/index';

import Duration from '../components/Duration';
import Appointments from '../components/Appointments';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    console.log(this.props);
    if(!this.props.fetching) {
      const {appointment, toggleAppointments, uniquePatients, toggleUniquePatients} = this.props;
      return (
        <div className="App">
          <Duration data={appointment} toggle={toggleAppointments} barDataKey={'duration'}/>
          <Appointments data={uniquePatients} toggle={toggleUniquePatients} barDataKey={'count'}/>
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
    uniquePatients: data.uniquePatients,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleAppointments, toggleUniquePatients, onRequestData }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
