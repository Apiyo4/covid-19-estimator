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
  * 2 ** getNumberOfDays(30);
  newObj.severeImpact.infectionsByRequestedTime = newObj.severeImpact.currentlyInfected
  * 2 ** getNumberOfDays(30);

  // challenge 2
  newObj.impact.severeCasesByRequestedTime = (15 / 100)
  * newObj.impact.infectionsByRequestedTime;
  newObj.severeImpact.severeCasesByRequestedTime = (15 / 100)
  * newObj.severeImpact.infectionsByRequestedTime;
  newObj.impact.hospitalBedsByRequestedTime = Math.trunc(data.totalHospitalBeds * 0.35)
    - newObj.impact.severeCasesByRequestedTime;
  newObj.severeImpact.hospitalBedsByRequestedTime = Math.trunc(data.totalHospitalBeds
  * 0.35) - newObj.severeImpact.severeCasesByRequestedTime;

  return newObj;
};

export default covid19ImpactEstimator;
