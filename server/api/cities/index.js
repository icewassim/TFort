import {
  getCityInfos,
  addCity,
  addScam,
} from './cities.controller';

const citiesRoutes = server => {
  server.get('/city/:name', getCityInfos);
  server.post('/city', addCity);
  server.post('/city/scams', addScam);
};

export default citiesRoutes;
