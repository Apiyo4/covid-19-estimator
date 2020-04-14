import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

const InputForm = (props)=>{
 const {newData, setNewData} = props;
    const [formData, setFormData] = useState({
        name: '',
        avgAge: '',
        avgDailyIncomeInUSD: '',
        avgDailyIncomePopulation: '',
        periodType: 'days',
      timeToElapse: '',
      reportedCases: '',
      population: '',
      totalHospitalBeds: ''
    });
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const name= formData.name;
        const avgAge = formData.avgAge;
        const avgDailyIncomeInUSD = formData.avgDailyIncomeInUSD;
        const avgDailyIncomePopulation = formData.avgDailyIncomePopulation;
        const periodType = formData.periodType;
        const timeToElapse =  formData.timeToElapse;
        const reportedCases = formData.reportedCases;
        const population = formData.population;
        const totalHospitalBeds =  formData.totalHospitalBeds;
        setNewData({
          ...newData,
          region: {
            name: name,
            avgAge: parseFloat(avgAge) ,
            avgDailyIncomeInUSD: parseFloat(avgDailyIncomeInUSD),
            avgDailyIncomePopulation: parseFloat(avgDailyIncomePopulation),
          },
          periodType: periodType,
          timeToElapse: parseInt(timeToElapse),
          reportedCases: parseInt(reportedCases),
          population: parseInt(population),
          totalHospitalBeds: parseInt(totalHospitalBeds)
        });
        setFormData({
          name: '',
          avgAge: '',
          avgDailyIncomeInUSD: '',
          avgDailyIncomePopulation: '',
          periodType: 'days',
          timeToElapse: '',
          reportedCases: '',
          population: '',
          totalHospitalBeds: ''
        });
        props.history.push('/estimates')
    }
    return (
      <div className="iForm">
        <nav className="navi">
          <Link id="link" to="/">
            Home
          </Link>
          <Link id="link" to="/estimates">
            Covid-19 Estimated Data
          </Link>
        </nav>
        <h1>Estimation Calculator</h1>
        <form>
          <label>
            <input
              type="text"
              placeholder="Enter the region's name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter average age of the population"
              value={formData.avgAge}
              name="avgAge"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter average daily income in US dollars"
              value={formData.avgDailyIncomeInUSD}
              name="avgDailyIncomeInUSD"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter the average daily income of the population in dolars"
              value={formData.avgDailyIncomePopulation}
              name="avgDailyIncomePopulation"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter the duration you want to estimate"
              value={formData.timeToElapse}
              name="timeToElapse"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <select
              name="periodType"
              value={formData.periodType}
              onChange={handleChange}
            >
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter number of reported cases"
              value={formData.reportedCases}
              name="reportedCases"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter the population of the region"
              value={formData.population}
              name="population"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Enter number of beds in the region"
              value={formData.totalHospitalBeds}
              name="totalHospitalBeds"
              onChange={handleChange}
            />
          </label>
          <br />
          <button onClick={handleSubmit}>Estimate</button>
        </form>
      </div>
    );
}

export default withRouter(InputForm);