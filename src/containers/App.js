import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  toggleDurations,
  toggleUniquePatients,
  onRequestData,
  toggleUniqueJagpros,
  toggleTotalFees
} from '../actions/index';

import BarChart from '../components/BarChart';
import Sector from '../components/Sector';
import Heatmap from '../components/Heatmap';
import Header from '../components/Header';
import './styles/App.css';

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
              <BarChart
                data={durations}
                toggle={toggleDurations}
                barDataKey={'duration'}
                label={'Total Appointment Hours'}
              />
              <BarChart
                data={uniquePatients}
                toggle={toggleUniquePatients}
                barDataKey={'count'}
                label={'Total Unique Patients'}
              />
              <BarChart
                data={uniqueJagpros}
                toggle={toggleUniqueJagpros}
                barDataKey={'count'}
                label={'Total Unique JagaPros'}
              />
              <BarChart
                data={totalFees}
                toggle={toggleTotalFees}
                barDataKey={'completed_fees'}
                label={'Total Completed Fees'}
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
      return <div className="loader" />;
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
    heatmap: data.heatmap,
    appointmentSum: data.appointmentSum
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
