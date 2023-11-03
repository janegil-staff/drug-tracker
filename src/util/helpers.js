
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