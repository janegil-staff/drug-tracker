
export const TimeFormat = props => {
  const {time} = props;
  const date = new Date(time);
  let day = date.getDate() - 1 < 10 ? '0' + (date.getDate() - 1) : (date.getDate() - 1);
  let hour = date.getHours() - 1 < 10 ? '0' + (date.getHours() - 1) : (date.getHours() - 1);
  let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  
  const formatedCounter = day + ':' + hour + ':' + minute + ':' + second;

  return formatedCounter;
}

export const getTotalValuesFromEntries = data => {
  let resultarr = [];
  data.forEach((d) => {
    data.forEach((d2) => {
      //if both objects have same site and they are not the same object
      if (d2.type == d.type && d != d2) {
    
        let result = {
          type: d.type,
          totalAmount: d2.amount + d.amount,
          totalCost: d2.price + d.price,
        };
        //if result with same site is not already present in the results array
        if (!resultarr.some((item) => item.type === result.type)) {
          resultarr.push(result);
        } 
      }
    });
  });
  return resultarr;
};
