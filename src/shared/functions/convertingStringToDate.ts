export const convertStringToDateFunction = (string: string): Date => {

  const [dateValues, timeValues] = string.split(' ');
  console.log(dateValues);
  console.log(timeValues);

  const [month, day, year] = dateValues.split('/');
  const [hours, minutes, seconds] = timeValues.split(':');

  const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

  return date;
  
}