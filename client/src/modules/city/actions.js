import exios from 'axios';

export const fetchCity = cityName => {
  const requestApi = exios.get(`http://localhost:3000/city/paris?name=${cityName}`);

  return {
    type: 'CITY',
    payload: requestApi,
  };
};
