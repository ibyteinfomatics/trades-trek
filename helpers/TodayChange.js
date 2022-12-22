export const TodayPerChange = (accountValue, perchange) => {
  const temp = (perchange * 100) / accountValue;
  return temp;
};
