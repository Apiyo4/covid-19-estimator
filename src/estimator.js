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

  return newObj;
};

export default covid19ImpactEstimator;
