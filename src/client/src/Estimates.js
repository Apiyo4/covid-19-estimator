import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import covid19ImpactEstimatorCopy from './CopyEstimator';

const Estimates = (props)=>{
    const {newData} = props
    console.log(covid19ImpactEstimatorCopy(newData).impact);

    
    return (
      <div className="tableH2">
        <nav className="navi">
          <Link id="link" to="/">
            Home
          </Link>
          <Link id="link" to="/form">
            Estimate Calculator
          </Link>
        </nav>
        <h2>Covid-19 estimations</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Impact cases</th>
            <th>Severe Impact cases</th>
          </tr>
          <tr>
            <td>Number of those currently infected</td>
            <td>
              {covid19ImpactEstimatorCopy(newData).impact.currentlyInfected}
            </td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).severeImpact
                  .currentlyInfected
              }
            </td>
          </tr>
          <tr>
            <td>Number of infections</td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).impact
                  .infectionsByRequestedTime
              }
            </td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).severeImpact
                  .infectionsByRequestedTime
              }
            </td>
          </tr>
          <tr>
            <td>Number of severe cases:</td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).impact
                  .severeCasesByRequestedTime
              }
            </td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).severeImpact
                  .severeCasesByRequestedTime
              }
            </td>
          </tr>
          <tr>
            <td>Number of hospital beds available</td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).impact
                  .hospitalBedsByRequestedTime
              }
            </td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).severeImpact
                  .hospitalBedsByRequestedTime
              }
            </td>
          </tr>
          <tr>
            <td>Number of cases addmited in ICU</td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).impact
                  .casesForICUByRequestedTime
              }
            </td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).severeImpact
                  .casesForICUByRequestedTime
              }
            </td>
          </tr>
          <tr>
            <td>Number of cases using ventilators</td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).impact
                  .casesForVentilatorsByRequestedTime
              }
            </td>
            <td>
              {
                covid19ImpactEstimatorCopy(newData).severeImpact
                  .casesForVentilatorsByRequestedTime
              }
            </td>
          </tr>
          <tr>
            <td>Amount in dolars lost daily</td>
            <td>
              {covid19ImpactEstimatorCopy(newData).impact.dollarsInFlight}
            </td>
            <td>
              {covid19ImpactEstimatorCopy(newData).severeImpact.dollarsInFlight}
            </td>
          </tr>
        </table>
      </div>
    );
}
export default withRouter(Estimates);