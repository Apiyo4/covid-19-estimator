const getNumberOfDays = (days) => Math.trunc(days / 3);
const covid19ImpactEstimator = (data) => {
  const newObj = {
    data: {},
    impact: {},
    severeImpact: {}
  };
  //   challenge 1
  newObj.impact.currentlyInfected = data.reportedCases * 10;
  newObj.severeImpact.currentlyInfected = data.reportedCases * 50;
  newObj.impact.infectionsByRequestedTime = newObj.impact.currentlyInfected
  * 2 ** getNumberOfDays(data.timeToElapse);
  newObj.severeImpact.infectionsByRequestedTime = newObj.severeImpact.currentlyInfected
  * 2 ** getNumberOfDays(data.timeToElapse);

  // challenge 2
  newObj.impact.severeCasesByRequestedTime = (15 / 100)
  * newObj.impact.infectionsByRequestedTime;
  newObj.severeImpact.severeCasesByRequestedTime = (15 / 100)
  * newObj.severeImpact.infectionsByRequestedTime;
  newObj.impact.hospitalBedsByRequestedTime = Math.trunc(data.totalHospitalBeds * 0.35)
    - newObj.impact.severeCasesByRequestedTime;
  newObj.severeImpact.hospitalBedsByRequestedTime = Math.trunc(data.totalHospitalBeds
  * 0.35) - newObj.severeImpact.severeCasesByRequestedTime;

  // challenge 3
  newObj.impact.casesForICUByRequestedTime = (newObj.impact.infectionsByRequestedTime * 5) / 100;
  newObj.severeImpact.casesForICUByRequestedTime = 0.05
  * newObj.severeImpact.infectionsByRequestedTime;
  newObj.impact.casesForVentilatorsByRequestedTime = 0.02 * newObj.impact.infectionsByRequestedTime;
  newObj.impact.casesForVentilatorsByRequestedTime = 0.02
  * newObj.severeImpact.infectionsByRequestedTime;
  newObj.impact.dollarsInFlight = newObj.impact.infectionsByRequestedTime
  * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation
  * data.timeToElapse;
  newObj.severeImpact.dollarsInFlight = newObj.severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation
  * data.timeToElapse;
  return newObj;
};

export default covid19ImpactEstimator;
