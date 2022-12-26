export const TodayPerChange = (accountValue, perchange) => {
  const temp = (perchange * 100) / accountValue;
  return temp;
};

export const AnnualReturn = (gameAmount, annualchange) => {
  const temp = (annualchange * 100) / gameAmount;
  return temp;
};
