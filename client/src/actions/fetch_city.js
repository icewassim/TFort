import exios from 'axios';

const fetchCityAction = (cityName) => {
  const requestApi = exios.get('http://localhost:3000/city/paris');
  return {
    type: 'CITY',
    payload: requestApi,
  };
}

export default fetchCityAction;
