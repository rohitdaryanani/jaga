import React, { Component } from 'react';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  toggleDurations,
  toggleUniquePatients,
  onRequestData,
  toggleUniqueJagpros,
  toggleTotalFees
} from '../actions/index';

import Duration from '../components/Duration';
import Patients from '../components/Patients';
import JagaPros from '../components/JagaPros';
import TotalFees from '../components/TotalFees';
import Sector from '../components/Sector';
import Heatmap from '../components/Heatmap';
import Header from '../components/Header';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    if (!this.props.fetching) {
      const {
        durations,
        toggleDurations,
        uniquePatients,
        toggleUniquePatients,
        uniqueJagpros,
        toggleUniqueJagpros,
        totalFees,
        toggleTotalFees,
        postalAppointment,
        heatmap
      } = this.props;
      return (
        <div className="App">
          <Header />
          <div className="container">
            <div className="row">
              <Duration
                data={durations}
                toggle={toggleDurations}
                barDataKey={'duration'}
              />
              <Patients
                data={uniquePatients}
                toggle={toggleUniquePatients}
                barDataKey={'count'}
              />
              <JagaPros
                data={uniqueJagpros}
                toggle={toggleUniqueJagpros}
                barDataKey={'count'}
              />
              <TotalFees
                data={totalFees}
                toggle={toggleTotalFees}
                barDataKey={'completed_fees'}
              />
              <Sector
                data={postalAppointment}
                dataKeyY={'count'}
                dataKeyX={'sector'}
              />
              <Heatmap data={heatmap} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div class="loader" />;
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
    totalFees: data.totalFees,
    postalAppointment: data.postalAppointment,
    heatmap: data.heatmap
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleDurations,
      toggleUniquePatients,
      onRequestData,
      toggleUniqueJagpros,
      toggleTotalFees
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
