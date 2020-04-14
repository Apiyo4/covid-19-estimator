// eslint-disable-next-line consistent-return
const getNumberOfDays = (days, dayType) => {
  if (dayType === 'days') {
    return Math.trunc(days / 3);
  } if (dayType === 'months') {
    return Math.trunc((days * 30) / 3);
  } if (dayType === 'weeks') {
    return Math.trunc((days / 3) * 7);
  }
};
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
  * 2 ** getNumberOfDays(data.timeToElapse, data.periodType);
  newObj.severeImpact.infectionsByRequestedTime = newObj.severeImpact.currentlyInfected
    * 2 ** getNumberOfDays(data.timeToElapse, data.periodType);

  // challenge 2
  newObj.impact.severeCasesByRequestedTime = Math.floor(
    (15 / 100) * newObj.impact.infectionsByRequestedTime
  );
  newObj.severeImpact.severeCasesByRequestedTime = Math.floor(
    (15 / 100) * newObj.severeImpact.infectionsByRequestedTime
  );
  newObj.impact.hospitalBedsByRequestedTime = Math.floor(data.totalHospitalBeds * 0.35)
    - newObj.impact.severeCasesByRequestedTime;
  newObj.severeImpact.hospitalBedsByRequestedTime = Math.floor(data.totalHospitalBeds
  * 0.35) - newObj.severeImpact.severeCasesByRequestedTime;

  // challenge 3
  newObj.impact.casesForICUByRequestedTime = Math.trunc(
    (newObj.impact.infectionsByRequestedTime * 5) / 100
  );
  newObj.severeImpact.casesForICUByRequestedTime = Math.trunc(
    0.05 * newObj.severeImpact.infectionsByRequestedTime
  );
  newObj.impact.casesForVentilatorsByRequestedTime = Math.trunc(
    0.02 * newObj.impact.infectionsByRequestedTime
  );
  newObj.impact.casesForVentilatorsByRequestedTime = Math.trunc(
    0.02 * newObj.severeImpact.infectionsByRequestedTime
  );
  newObj.impact.dollarsInFlight = newObj.impact.infectionsByRequestedTime
  * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation
  * data.timeToElapse;
  newObj.severeImpact.dollarsInFlight = newObj.severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation
  * data.timeToElapse;
  return newObj;
};

export default covid19ImpactEstimator;
