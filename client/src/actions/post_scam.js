import exios from 'axios';

const postScam = (cityName, scamContent) => {
  const requestApi = exios.post('http://localhost:3000/scams');
  return {
    type: 'CITY',
    payload: requestApi,
  };
}

export default postScam;
