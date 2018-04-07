import {
  getCityInfos,
  addCity,
} from './cities.controller';

const citiesRoutes = server => {
  server.get('/city/:name', getCityInfos);
  server.post('/city/add', addCity);
};

export default citiesRoutes;
