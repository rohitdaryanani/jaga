import React, { Component } from 'react';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDurations, toggleUniquePatients ,onRequestData, toggleUniqueJagpros } from '../actions/index';

import Duration from '../components/Duration';
import Patients from '../components/Patients';
import JagaPros from '../components/JagaPros';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    if(!this.props.fetching) {
      const {durations, toggleDurations, uniquePatients, toggleUniquePatients, uniqueJagpros, toggleUniqueJagpros} = this.props;
      return (
        <div className="App">
          <Duration data={durations} toggle={toggleDurations} barDataKey={'duration'}/>
          <Patients data={uniquePatients} toggle={toggleUniquePatients} barDataKey={'count'}/>
          <JagaPros data={uniqueJagpros} toggle={toggleUniqueJagpros} barDataKey={'count'}/>
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
    uniqueJagpros: data.uniqueJagpros,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleDurations, toggleUniquePatients, onRequestData, toggleUniqueJagpros }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
