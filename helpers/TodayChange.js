export const TodayPerChange = (accountValue, perchange) => {


  const temp = (perchange * 100) / ((accountValue==0)?1:accountValue);
  return temp;
};

export const AnnualReturn = (gameAmount, annualchange) => {
  const temp = (annualchange * 100) / ((gameAmount==0)?1:gameAmount);
  return temp;
};
