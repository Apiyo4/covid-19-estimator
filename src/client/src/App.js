import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home';
import InputForm from './InputForm';
import { useState } from 'react';
import Estimates from './Estimates';

function App() {
  const [newData, setNewData] = useState({
    region: {
      name: 'Kenya',
      avgAge: '15',
      avgDailyIncomeInUSD: '1.3',
      avgDailyIncomePopulation: '0.5'
    },
    periodType: 'days',
    timeToElapse: '30',
    reportedCases: '20',
    population: '20000000',
    totalHospitalBeds: '482341'
  });
  
  
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route
        exact
        path="/form"
        render={() => <InputForm newData={newData} setNewData={setNewData} />}
      ></Route>
    
      <Route
        exact
        path="/estimates"
        render={() => <Estimates newData={newData} setNewData={setNewData} />}
      ></Route>
    </div>
  );
}

export default withRouter(App);
