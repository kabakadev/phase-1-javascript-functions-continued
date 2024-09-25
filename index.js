function saturdayFun(niceActivity = "roller-skate") {
  return `This Saturday, I want to ${niceActivity}!`;
}
const mondayWork = function (walk = "go to the office") {
  return `This Monday, I will ${walk}.`;
};
function wrapAdjective(wrapperAdj = "*") {
  return function (anyVal = "special") {
    return `You are ${wrapperAdj}${anyVal}${wrapperAdj}!`;
  };
}
