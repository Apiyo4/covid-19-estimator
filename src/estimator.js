const covid19ImpactEstimator = (data) => {
  const newObj = {
    data: {},
    impact: {},
    severeImpact: {}
  };
  newObj.impact['currentlyInfected'] = data.reportedCases * 10;
  newObj.severeImpact['currentlyInfected'] = data.reportedCases * 50;
  newObj.impact['infectionsByRequestedTime'] =
    newObj.impact.currentlyInfected * 2 * Math.pow(2, 9);
  newObj.severeImpact['infectionsByRequestedTime'] =
    newObj.severeImpact.currentlyInfected * 2 * Math.pow(2, 9);
  return newObj;
};

export default covid19ImpactEstimator;
