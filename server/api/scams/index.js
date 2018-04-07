import {
  getScammsByCity,
} from './scamms.controller';

const scamsRoute = server => {
  server.get('/city/cityId', getScammsByCity);
};

export default scamsRoute;