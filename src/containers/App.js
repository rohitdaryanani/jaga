import React, { Component } from 'react';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDurations, toggleUniquePatients ,onRequestData } from '../actions/index';

import Duration from '../components/Duration';
import Patients from '../components/Patients';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    console.log(this.props);
    if(!this.props.fetching) {
      const {durations, toggleDurations, uniquePatients, toggleUniquePatients} = this.props;
      return (
        <div className="App">
          <Duration data={durations} toggle={toggleDurations} barDataKey={'duration'}/>
          <Patients data={uniquePatients} toggle={toggleUniquePatients} barDataKey={'count'}/>
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
    durations: data.durations,
    uniquePatients: data.uniquePatients,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleDurations, toggleUniquePatients, onRequestData }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
