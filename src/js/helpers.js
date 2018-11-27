export const getTheYear = () => {
  const date = new Date();
  const year = date.getYear();
  console.log(year);
  return year;
};
